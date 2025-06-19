<?php
include "connection.php";

// DASHBOARD 3 NA MAY TABLE

$sql = "SELECT
2_request_masterlist.RID,
2_request_masterlist.TYPE,
2_request_masterlist.STATUS,
2_request_masterlist.LOCATION,
2_request_masterlist.RESULT,
mold_masterlist.CUSTOMER
FROM `2_request_masterlist`
INNER JOIN mold_masterlist ON 2_request_masterlist.MOLD_CTRL = mold_masterlist.MOLD_CTRL
WHERE CONCAT(COALESCE(2_request_masterlist.DELETED_AT, '')) = ''";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a" => $row['RID'],
            "b" => $row['TYPE'],
            "c" => $row['STATUS'],
            "d" => $row['CUSTOMER'],
            "e" => $row['LOCATION'],
            "f" => $row['RESULT'],
            
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

// WHERE CONCAT((CASE WHEN STATUS != '4' THEN '1' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '1'
?>