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

// ── GET — public, returns all promotions ──────────────────────────────────────
if ($method === 'GET') {
    $stmt = $conn->query('SELECT id, filename, sort_order, created_at FROM promotions ORDER BY sort_order ASC, id ASC');
    echo json_encode($stmt->fetchAll());
    exit();
}

// ── POST — upload image and insert promotion record ───────────────────────────
if ($method === 'POST') {
    requireAuth();

    if (empty($_FILES['image'])) {
        http_response_code(400);
        echo json_encode(['error' => 'No file uploaded']);
        exit();
    }

    $file     = $_FILES['image'];
    $maxBytes = 5 * 1024 * 1024;
    $allowed  = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo json_encode(['error' => 'Upload error code: ' . $file['error']]);
        exit();
    }

    if ($file['size'] > $maxBytes) {
        http_response_code(400);
        echo json_encode(['error' => 'File too large. Maximum size is 5 MB.']);
        exit();
    }

    $finfo    = new finfo(FILEINFO_MIME_TYPE);
    $mimeType = $finfo->file($file['tmp_name']);

    if (!in_array($mimeType, $allowed, true)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF.']);
        exit();
    }

    $ext       = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename  = bin2hex(random_bytes(16)) . '.' . strtolower($ext);
    $uploadDir = __DIR__ . '/../uploads/promotions/';

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    if (!move_uploaded_file($file['tmp_name'], $uploadDir . $filename)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save file']);
        exit();
    }

    $stmt = $conn->prepare('INSERT INTO promotions (filename, sort_order) VALUES (:filename, 0)');
    $stmt->execute([':filename' => $filename]);

    $id        = (int)$conn->lastInsertId();
    $promotion = $conn->query("SELECT * FROM promotions WHERE id = {$id}")->fetch();

    http_response_code(201);
    echo json_encode($promotion);
    exit();
}

// ── DELETE — remove promotion record and image file ───────────────────────────
if ($method === 'DELETE') {
    requireAuth();

    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid ID']);
        exit();
    }

    $promotion = $conn->query("SELECT filename FROM promotions WHERE id = {$id}")->fetch();
    if (!$promotion) {
        http_response_code(404);
        echo json_encode(['error' => 'Promotion not found']);
        exit();
    }

    $path = __DIR__ . '/../uploads/promotions/' . $promotion['filename'];
    if (file_exists($path)) {
        unlink($path);
    }

    $stmt = $conn->prepare('DELETE FROM promotions WHERE id = :id');
    $stmt->execute([':id' => $id]);

    echo json_encode(['success' => true]);
    exit();
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
