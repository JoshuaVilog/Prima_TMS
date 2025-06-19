<?php
include "connection.php";

$moldCtrl = $_POST['moldCtrl'];
$find = $moldCtrl."-YES";

$sql = "SELECT `MOLD_CTRL`, `STATUS` FROM `request_masterlist` WHERE CONCAT(MOLD_CTRL, '-',(CASE WHEN STATUS != '4' THEN 'YES' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '$find'";

$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    echo "YES";
} else {
    echo "NO";
}

// header('Content-Type: application/json');
// echo json_encode($records);

?>