<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Example: Send an email (you need to set up your mail server or use a third-party service)
    $to = 'fabchirajoul@gmail.com';
    $subject = 'New Form Submission';
    $message = "Name: {$data['name']}\nEmail: {$data['email']}\nMessage: {$data['message']}";
    $headers = 'From: webmaster@example.com';

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
