<?php
include "connection.php";

$id = $_POST['id'];

$sql = "SELECT `RID`, `JOB_ORDER_NO`, `REQUEST_ID`, `TARGET_DATE`, `COUNTER_MEASURE`, `STATUS`, `IN_DATETIME`, `IN_BY`, `OUT_DATETIME`, `OUT_BY`, `REMARKS` FROM `job_order_masterlist` WHERE RID =  $id";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records["a"] = $row['RID'];
        $records["b"] = $row['JOB_ORDER_NO'];
        $records["c"] = $row['REQUEST_ID'];
        $records["d"] = $row['TARGET_DATE'];
        $records["e"] = $row['COUNTER_MEASURE'];
        $records["f"] = $row['STATUS'];
        $records["g"] = $row['IN_DATETIME'];
        $records["h"] = $row['IN_BY'];
        $records["i"] = $row['OUT_DATETIME'];
        $records["j"] = $row['OUT_BY'];
        $records["k"] = $row['REMARKS'];
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>