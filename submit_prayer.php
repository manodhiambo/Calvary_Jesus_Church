<?php
// Database connection
$servername = "localhost";
$username = "";
$password = ""; 
$dbname = "calvary_church"; 


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
	$full_name = $_POST["full_name"] ?? '';
	$phone_number = $_POST["phone_number"] ?? '';
	$prayer_request = $_POST["prayer_request"] ?? '';
	$secret = $_POST["secret"] ?? '';
	$can_call = $_POST["can_call"] ?? '';


// Validate input (optional but recommended)

	if (!empty($full_name) && !empty($prayer_request)) {
		// Prepare the SQL query
		$sql = "INSERT INTO prayer_requests (full_name, phone_number, prayer_request, secret, can_call)
			VALUES ('$full_name', '$phone_number', '$prayer_request', '$secret', '$can_call')";

		// Execute the query
		if ($conn->query($sql) === TRUE) {
			echo "Thank you! Your prayer request has been submitted.";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
		    } else {
			            echo "Full Name and Prayer Request are required fields.";
				        }
} else {
	// Handle when script is not accessed via a POST request
	echo "This script can only handle POST requests. Ensure you're submitting the form correctly.";
}
// Close the connection
$conn->close();
?>
