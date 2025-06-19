<?php
include "connection.php";

$sql = "SELECT
`RID`,
`TOP_1`,
`TOP_2`,
`TOP_3`,
`TOP_4`,
`TOP_5`,
`CREATED_AT`
FROM
`priority_pm_masterlist`
ORDER BY CREATED_AT DESC
LIMIT 3;";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['TOP_1'],
            "c"=>$row['TOP_2'],
            "d"=>$row['TOP_3'],
            "e"=>$row['TOP_4'],
            "f"=>$row['TOP_5'],
            "g"=>$row['CREATED_AT'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>