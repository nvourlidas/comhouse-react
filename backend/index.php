<?php
require_once __DIR__ . '/config/cors.php';
require_once __DIR__ . '/config/database.php';

header('Content-Type: application/json; charset=utf-8');

$db = new Database();
$conn = $db->getConnection();

$row = $conn->query('SELECT VERSION() AS version')->fetch();

echo json_encode([
    'status'  => 'ok',
    'message' => 'Comhouse API is running',
    'mysql'   => $row['version'],
]);
