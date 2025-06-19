<?php
include "connection.php";

$requestID = $_POST['requestID'];

$sql = "SELECT `RID`, `MACHINE_NO`, `PIC`, `DATE_OF_TRIAL`, `REMARKS`, `RESULT`, `CREATED_AT` FROM `trial_masterlist` WHERE REQUEST_ID =  $requestID ORDER BY CREATED_AT DESC";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['MACHINE_NO'],
            "c"=>$row['PIC'],
            "d"=>$row['DATE_OF_TRIAL'],
            "e"=>$row['REMARKS'],
            "f"=>$row['RESULT'],
            "g"=>$row['CREATED_AT'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>