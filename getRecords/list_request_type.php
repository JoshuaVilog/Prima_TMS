<?php
include "connection.php";

$sql = "SELECT `RID`, `REQUEST_TYPE_DESC` FROM `list_request_type`";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['REQUEST_TYPE_DESC'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>