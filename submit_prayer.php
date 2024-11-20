<?php
// Database connection configuration
$host = 'localhost';
$username = '';
$password = '';
$database = 'calvary_church';

// Connect to the database
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Retrieve form data and sanitize inputs
	$fullName = $conn->real_escape_string($_POST['full_name']);
	$phoneNumber = isset($_POST['phone_number']) ? $conn->real_escape_string($_POST['phone_number']) : NULL;
	$prayerRequest = $conn->real_escape_string($_POST['prayer_request']);
	$isSecret = isset($_POST['is_secret']) ? 1 : 0;
	$allowContact = isset($_POST['allow_contact']) ? 1 : 0;

	// Validate required fields
	if (empty($fullName) || empty($prayerRequest)) {
		        echo "Full name and prayer request are required.";
			        exit;
			    }

	// Insert data into the database
	$sql = "INSERT INTO prayer_requests (full_name, phone_number, prayer_request, is_secret, allow_contact)
		            VALUES ('$fullName', '$phoneNumber', '$prayerRequest', '$isSecret', '$allowContact')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you for your prayer request! We will pray for you.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
