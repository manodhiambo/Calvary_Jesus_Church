<?php
// Database connection configuration
$servername = "sql109.infinityfree.com";
$username = "if0_38091611";
$password = "Calvary2025";
$dbname = "calvary_church";

try {
	// Create PDO instance with the correct DSN
	$dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8mb4";
	$conn = new PDO($dsn, $username, $password);
	
	// Set PDO error mode to exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	// Catch and display connection errors
	die("Database connection failed: " . $e->getMessage());
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Retrieve and sanitize form inputs
	$full_name = htmlspecialchars($_POST['full_name']);
	$phone_number = !empty($_POST['phone_number']) ? htmlspecialchars($_POST['phone_number']) : NULL;
	$prayer_request = htmlspecialchars($_POST['prayer_request']);
	$is_secret = isset($_POST['is_secret']) ? 1 : 0;
	$allow_contact = isset($_POST['allow_contact']) ? 1 : 0;

	try {
		$sql = "INSERT INTO prayer_requests (full_name, phone_number, prayer_request, is_secret, allow_contact)
			VALUES (:full_name, :phone_number, :prayer_request, :is_secret, :allow_contact)";
		
		// Prepare the statement
		$stmt = $conn->prepare($sql);

		$stmt->bindParam(':full_name', $full_name, PDO::PARAM_STR);
		$stmt->bindParam(':phone_number', $phone_number, PDO::PARAM_STR);
		$stmt->bindParam(':prayer_request', $prayer_request, PDO::PARAM_STR);
		$stmt->bindParam(':is_secret', $is_secret, PDO::PARAM_INT);
		$stmt->bindParam(':allow_contact', $allow_contact, PDO::PARAM_INT);

		// Execute the query
		$stmt->execute();

		// Success message and redirection
		echo "<script>alert('Prayer request submitted successfully!'); window.location.href = 'index.php';</script>";
	} catch (PDOException $e) {
		echo "Error submitting prayer request: " . $e->getMessage();
	}
}
?>
