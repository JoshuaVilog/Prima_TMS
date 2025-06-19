<?php
include "connection.php";

$requestID = $_POST['requestID'];

$sql = "SELECT `RID`, `PIC`, `DATE`, `REMARKS`, `RESULT`, `CREATED_AT` FROM `qc_masterlist` WHERE REQUEST_ID =  $requestID ORDER BY CREATED_AT DESC";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['PIC'],
            "c"=>$row['DATE'],
            "d"=>$row['REMARKS'],
            "e"=>$row['RESULT'],
            "f"=>$row['CREATED_AT'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>