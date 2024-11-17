<?php
// Database connection
$servername = "localhost";
$username = "root"; // Replace with your DB username
$password = ""; // Replace with your DB password
$dbname = "calvary_jesus_church"; // Replace with your DB name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$name = $_POST['name'];
$phone = $_POST['phone'] ?? ''; // Optional field
$prayerRequest = $_POST['prayerRequest'];
$secret = $_POST['secret'];
$canCall = $_POST['canCall'];


// Prepare and bind
$stmt = $conn->prepare("INSERT INTO prayer_requests (name, phone, prayer_request, secret, can_call) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $phone, $prayerRequest, $secret, $canCall);

// Execute the statement
if ($stmt->execute()) {
	    echo "Prayer request submitted successfully!";
} else {
	    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
