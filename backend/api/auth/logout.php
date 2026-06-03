<?php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/auth.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

requireAuth();

preg_match('/^Bearer\s+(.+)$/i', $_SERVER['HTTP_AUTHORIZATION'] ?? '', $matches);
$token = $matches[1];

$db   = new Database();
$conn = $db->getConnection();
$stmt = $conn->prepare('DELETE FROM admin_sessions WHERE token = :token');
$stmt->execute([':token' => $token]);

echo json_encode(['success' => true]);
