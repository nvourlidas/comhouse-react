<?php
require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/auth.php';

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

requireAuth();

if (empty($_FILES['image'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded']);
    exit();
}

$file     = $_FILES['image'];
$maxBytes = 5 * 1024 * 1024; // 5 MB
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

// Verify MIME type from the actual file content, not the client-supplied type
$finfo    = new finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->file($file['tmp_name']);

if (!in_array($mimeType, $allowed, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF.']);
    exit();
}

$ext       = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename  = bin2hex(random_bytes(16)) . '.' . strtolower($ext);
$uploadDir = __DIR__ . '/../uploads/articles/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if (!move_uploaded_file($file['tmp_name'], $uploadDir . $filename)) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save file']);
    exit();
}

echo json_encode([
    'filename' => $filename,
    'url'      => 'http://localhost:8000/uploads/articles/' . $filename,
]);
