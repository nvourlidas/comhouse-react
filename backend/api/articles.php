<?php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$db   = new Database();
$conn = $db->getConnection();

// ── GET ──────────────────────────────────────────────────────────────────────
if ($method === 'GET') {

    // Single article by id (admin only)
    if (isset($_GET['id'])) {
        requireAuth();
        $id      = (int)$_GET['id'];
        $article = $conn->query("SELECT * FROM articles WHERE id = {$id}")->fetch();
        if (!$article) {
            http_response_code(404);
            echo json_encode(['error' => 'Article not found']);
            exit();
        }
        echo json_encode($article);
        exit();
    }

    // Single article by slug (public — published only)
    if (isset($_GET['slug'])) {
        $stmt = $conn->prepare(
            'SELECT * FROM articles WHERE slug = :slug AND status = "published"'
        );
        $stmt->execute([':slug' => $_GET['slug']]);
        $article = $stmt->fetch();

        if (!$article) {
            http_response_code(404);
            echo json_encode(['error' => 'Article not found']);
            exit();
        }

        echo json_encode($article);
        exit();
    }

    // List — admins see all, public sees published only
    $isAdmin = isTokenValid($_SERVER['HTTP_AUTHORIZATION'] ?? '', $conn);

    if ($isAdmin) {
        $stmt = $conn->query('SELECT * FROM articles ORDER BY created_at DESC');
    } else {
        $stmt = $conn->query(
            'SELECT * FROM articles WHERE status = "published" ORDER BY published_at DESC'
        );
    }

    echo json_encode($stmt->fetchAll());
    exit();
}

// ── POST — create ─────────────────────────────────────────────────────────────
if ($method === 'POST') {
    requireAuth();

    $data = json_decode(file_get_contents('php://input'), true);

    $title   = trim($data['title']   ?? '');
    $content = trim($data['content'] ?? '');
    $excerpt = trim($data['excerpt'] ?? '');
    $image   = trim($data['image']   ?? '');
    $status  = in_array($data['status'] ?? '', ['draft', 'published']) ? $data['status'] : 'draft';
    $slug    = generateSlug($title, $conn);

    if ($title === '' || $content === '') {
        http_response_code(400);
        echo json_encode(['error' => 'Title and content are required']);
        exit();
    }

    $published_at = $status === 'published' ? date('Y-m-d H:i:s') : null;

    $stmt = $conn->prepare(
        'INSERT INTO articles (title, slug, excerpt, content, image, status, published_at, created_at, updated_at)
         VALUES (:title, :slug, :excerpt, :content, :image, :status, :published_at, NOW(), NOW())'
    );
    $stmt->execute([
        ':title'        => $title,
        ':slug'         => $slug,
        ':excerpt'      => $excerpt ?: null,
        ':content'      => $content,
        ':image'        => $image ?: null,
        ':status'       => $status,
        ':published_at' => $published_at,
    ]);

    $id = (int)$conn->lastInsertId();
    $article = $conn->query("SELECT * FROM articles WHERE id = {$id}")->fetch();

    http_response_code(201);
    echo json_encode($article);
    exit();
}

// ── PUT — update ──────────────────────────────────────────────────────────────
if ($method === 'PUT') {
    requireAuth();

    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid ID']);
        exit();
    }

    $existing = $conn->query("SELECT * FROM articles WHERE id = {$id}")->fetch();
    if (!$existing) {
        http_response_code(404);
        echo json_encode(['error' => 'Article not found']);
        exit();
    }

    $data    = json_decode(file_get_contents('php://input'), true);
    $title   = trim($data['title']   ?? $existing['title']);
    $content = trim($data['content'] ?? $existing['content']);
    $excerpt = trim($data['excerpt'] ?? ($existing['excerpt'] ?? ''));
    $image   = trim($data['image']   ?? ($existing['image']   ?? ''));
    $status  = in_array($data['status'] ?? '', ['draft', 'published']) ? $data['status'] : $existing['status'];

    // Recalculate slug only if title changed
    $slug = $title !== $existing['title']
        ? generateSlug($title, $conn, $id)
        : $existing['slug'];

    // Set published_at when first publishing
    $published_at = $existing['published_at'];
    if ($status === 'published' && $published_at === null) {
        $published_at = date('Y-m-d H:i:s');
    }

    $stmt = $conn->prepare(
        'UPDATE articles
         SET title = :title, slug = :slug, excerpt = :excerpt, content = :content,
             image = :image, status = :status, published_at = :published_at, updated_at = NOW()
         WHERE id = :id'
    );
    $stmt->execute([
        ':title'        => $title,
        ':slug'         => $slug,
        ':excerpt'      => $excerpt ?: null,
        ':content'      => $content,
        ':image'        => $image ?: null,
        ':status'       => $status,
        ':published_at' => $published_at,
        ':id'           => $id,
    ]);

    $article = $conn->query("SELECT * FROM articles WHERE id = {$id}")->fetch();
    echo json_encode($article);
    exit();
}

// ── DELETE ────────────────────────────────────────────────────────────────────
if ($method === 'DELETE') {
    requireAuth();

    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid ID']);
        exit();
    }

    // Delete associated image file if present
    $article = $conn->query("SELECT image FROM articles WHERE id = {$id}")->fetch();
    if ($article && $article['image']) {
        $path = __DIR__ . '/../uploads/articles/' . $article['image'];
        if (file_exists($path)) {
            unlink($path);
        }
    }

    $stmt = $conn->prepare('DELETE FROM articles WHERE id = :id');
    $stmt->execute([':id' => $id]);

    if ($stmt->rowCount() === 0) {
        http_response_code(404);
        echo json_encode(['error' => 'Article not found']);
        exit();
    }

    echo json_encode(['success' => true]);
    exit();
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);

// ── Helpers ───────────────────────────────────────────────────────────────────

function generateSlug(string $title, PDO $conn, int $excludeId = 0): string {
    $slug = mb_strtolower(trim($title), 'UTF-8');

    // Transliterate to ASCII, ignore characters that can't be mapped (e.g. emojis)
    $ascii = @iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $slug);
    if ($ascii !== false && $ascii !== '') {
        $slug = $ascii;
    } else {
        // Strip anything that isn't a letter, digit or space
        $slug = preg_replace('/[^\p{L}\p{N}\s]/u', '', $slug);
    }

    // Replace non-alphanumeric runs with a hyphen
    $slug = preg_replace('/[^a-z0-9]+/i', '-', $slug);
    $slug = strtolower(trim($slug, '-'));

    // Fallback if the title was entirely emojis / symbols
    if ($slug === '') {
        $slug = 'article-' . time();
    }

    $base  = $slug;
    $count = 1;

    while (true) {
        $stmt = $conn->prepare(
            'SELECT id FROM articles WHERE slug = :slug AND id != :exclude'
        );
        $stmt->execute([':slug' => $slug, ':exclude' => $excludeId]);

        if (!$stmt->fetch()) break;

        $slug = $base . '-' . $count++;
    }

    return $slug;
}

function isTokenValid(string $header, PDO $conn): bool {
    if (!preg_match('/^Bearer\s+(.+)$/i', $header, $matches)) return false;

    $stmt = $conn->prepare(
        'SELECT id FROM admin_sessions WHERE token = :token AND expires_at > NOW()'
    );
    $stmt->execute([':token' => $matches[1]]);
    return (bool)$stmt->fetch();
}
