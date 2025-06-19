<?php
include "connection.php";

$requestID = $_POST['requestID'];

$sql = "SELECT `RID`, `JOB_ORDER_NO`, `TARGET_DATE`, `COUNTER_MEASURE`, `STATUS`, `IN_DATETIME`, `IN_BY`, `OUT_DATETIME`, `OUT_BY`, `REMARKS` FROM `job_order_masterlist` WHERE REQUEST_ID =  $requestID ORDER BY CREATED_AT DESC";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['JOB_ORDER_NO'],
            "c"=>$row['TARGET_DATE'],
            "d"=>$row['COUNTER_MEASURE'],
            "e"=>$row['STATUS'],
            "f"=>$row['IN_DATETIME'],
            "g"=>$row['IN_BY'],
            "h"=>$row['OUT_DATETIME'],
            "i"=>$row['OUT_BY'],
            "j"=>$row['REMARKS'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>