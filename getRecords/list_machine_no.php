<?php
include "connection.php";

$sql = "SELECT `RID`, `MACHINE_NO_DESC`, `BRAND` FROM `list_machine_no`";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['MACHINE_NO_DESC'],
            "c"=>$row['BRAND'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>