<?php
include "connection.php";

date_default_timezone_set('Asia/Manila');
$date = date("Y-m-d");

$sql = "SELECT COUNT(RID) AS count FROM `2_request_masterlist` WHERE DATE(CREATED_AT) = '$date' AND STATUS = '2'";

$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo $row['count'];





// $createdAt = $row['CREATED_AT'];
// $createdBy = $row['CREATED_BY'];
// $createdIP = $row['CREATED_IP']; 
// SELECT * FROM `2_request_masterlist` WHERE CREATED_AT LIKE '%2025-03-13%'

// echo json_encode(['CREATED_BY' => $createdBy, 'CREATED_IP' => $createdIP, 'CREATED_AT' => $createdAt]);


?>