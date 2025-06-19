<?php
include "connection.php";

$sql = "SELECT `RID`, `MOLD_CTRL`, `ITEM_CODE`, `ITEM_NAME`, `CUSTOMER`, `MODEL`, `MAKER`, `CATEGORY`, `MOLD_LOCATION`, `MARK`, `MOLD_STATUS`, `COLOR_CODE`, `GUARANTEE`, `CAVITY`, `TRANSFER_DATE`, `APPROVAL_DATE`, `MOLD_CONDITION`, `CREATED_AT` FROM `mold_masterlist` WHERE COALESCE(DELETED_AT, '') = '' ORDER BY RID DESC";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records[] = array(
            "a"=>$row['RID'],
            "b"=>$row['MOLD_CTRL'],
            "c"=>$row['ITEM_CODE'], //PART NO
            "d"=>$row['ITEM_NAME'],
            "e"=>$row['CUSTOMER'],
            "f"=>$row['MODEL'],
            "g"=>$row['MAKER'],
            "h"=>$row['CATEGORY'],
            "i"=>$row['MOLD_LOCATION'],
            "j"=>$row['MARK'], //TOOL
            "k"=>$row['MOLD_STATUS'],
            "l"=>$row['COLOR_CODE'],
            "m"=>$row['GUARANTEE'],
            "n"=>$row['CAVITY'],
            "o"=>$row['TRANSFER_DATE'],
            "p"=>$row['APPROVAL_DATE'],
            "q"=>$row['MOLD_CONDITION'],
            "r"=>$row['CREATED_AT'],
        );
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>