<?php
include "connection.php";

$sql = "SELECT `RID`, `LOCATION_DESC` FROM `list_location`";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['LOCATION_DESC'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>