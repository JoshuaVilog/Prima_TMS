<?php
include "connection.php";

$sql = "SELECT
`CREATED_BY`,
`CREATED_AT`,
`CREATED_IP`
FROM
`mold_masterlist`
ORDER BY REALTIME_ACTION DESC
LIMIT 1";

$result = $conn->query($sql);
$row = $result->fetch_assoc();

$createdAt = $row['CREATED_AT'];
$createdBy = $row['CREATED_BY'];
$createdIP = $row['CREATED_IP'];

echo json_encode(['CREATED_BY' => $createdBy, 'CREATED_IP' => $createdIP, 'CREATED_AT' => $createdAt]);


?>