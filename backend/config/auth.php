<?php
require_once __DIR__ . '/database.php';

function requireAuth(): array {
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

    if (!preg_match('/^Bearer\s+(.+)$/i', $header, $matches)) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit();
    }

    $token = $matches[1];
    $db    = new Database();
    $conn  = $db->getConnection();

    $stmt = $conn->prepare(
        'SELECT a.id, a.username
         FROM admin_sessions s
         JOIN admins a ON a.id = s.admin_id
         WHERE s.token = :token AND s.expires_at > NOW()'
    );
    $stmt->execute([':token' => $token]);
    $admin = $stmt->fetch();

    if (!$admin) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit();
    }

    return $admin;
}
