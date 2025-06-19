<?php
include "connection.php";

$sql = "SELECT `RID`, `MOLD_CODE`, `CONTROL_NO`, `REQUEST_TYPE`, `DETAIL`, `REQUEST_DATE`, `TARGET_DATE`, `REMARKS`, `DATE_IN`, `DATE_OUT` FROM `request_masterlist`";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['MOLD_CODE'],
            "c" => $row['CONTROL_NO'],
            "d" => $row['REQUEST_TYPE'],
            "e" => $row['DETAIL'],
            "f" => $row['REQUEST_DATE'],
            "g" => $row['TARGET_DATE'],
            "h" => $row['REMARKS'],
            "i" => $row['DATE_IN'],
            "j" => $row['DATE_OUT'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>