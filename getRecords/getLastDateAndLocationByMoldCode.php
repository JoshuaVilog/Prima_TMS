<?php
include "connection.php";

$moldCode = $_POST['moldCode'];

$sql = "SELECT REQUEST_DATE, LOCATION FROM `2_request_masterlist` WHERE MOLD_CTRL = '$moldCode' ORDER BY CREATED_AT DESC LIMIT 1";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records["REQUEST_DATE"] = $row['REQUEST_DATE'];
        $records["LOCATION"] = $row['LOCATION'];
        
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>