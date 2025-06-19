<?php
include "connection.php";

$sql = "SELECT 
    RID,
    TOP_1,
    TOP_2,
    TOP_3,
    TOP_4,
    TOP_5,
    CREATED_AT
    FROM priority_pm_masterlist
    ORDER BY CREATED_AT DESC
    LIMIT 1;
";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records["a"] = $row['RID'];
        $records["b"] = $row['TOP_1'];
        $records["c"] = $row['TOP_2'];
        $records["d"] = $row['TOP_3'];
        $records["e"] = $row['TOP_4'];
        $records["f"] = $row['TOP_5'];
        $records["g"] = $row['CREATED_AT'];
        
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>