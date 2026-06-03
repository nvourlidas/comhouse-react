<?php
// ONE-TIME SETUP — delete this file after running it once.
require_once __DIR__ . '/../../config/database.php';

$username = 'comhouse';
$password = 'comhouse98466'; // Change before running!

$db   = new Database();
$conn = $db->getConnection();

$hash = password_hash($password, PASSWORD_BCRYPT);

$stmt = $conn->prepare(
    'INSERT INTO admins (username, password_hash, created_at) VALUES (:username, :password_hash, NOW())'
);
$stmt->execute([':username' => $username, ':password_hash' => $hash]);

echo "Admin created. Username: {$username}\nDelete this file now!";
