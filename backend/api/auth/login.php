<?php
require_once __DIR__ . '/../../config/cors.php';
require_once __DIR__ . '/../../config/database.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$data     = json_decode(file_get_contents('php://input'), true);
$username = trim($data['username'] ?? '');
$password = $data['password'] ?? '';

if ($username === '' || $password === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Username and password are required']);
    exit();
}

$db   = new Database();
$conn = $db->getConnection();

$stmt = $conn->prepare('SELECT id, username, password_hash FROM admins WHERE username = :username');
$stmt->execute([':username' => $username]);
$admin = $stmt->fetch();

if (!$admin || !password_verify($password, $admin['password_hash'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials']);
    exit();
}

$token      = bin2hex(random_bytes(32));
$expires_at = date('Y-m-d H:i:s', strtotime('+8 hours'));

$stmt = $conn->prepare(
    'INSERT INTO admin_sessions (admin_id, token, expires_at, created_at)
     VALUES (:admin_id, :token, :expires_at, NOW())'
);
$stmt->execute([
    ':admin_id'   => $admin['id'],
    ':token'      => $token,
    ':expires_at' => $expires_at,
]);

echo json_encode([
    'token'   => $token,
    'expires' => $expires_at,
    'admin'   => ['id' => $admin['id'], 'username' => $admin['username']],
]);
