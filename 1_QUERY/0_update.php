<?php
header("Access-Control-Allow-Origin: *");
$host = "localhost";
$username = "root";
$password = "";
$database = "1_tms";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_POST['id'];

$conn->query("UPDATE `record` SET `STATUS`='2' WHERE `RID`= $id");
// Close connection
$conn->close();

// Return JSON response
// header('Content-Type: application/json');
// echo json_encode($data);
echo "RECORD ADDED";
?>
