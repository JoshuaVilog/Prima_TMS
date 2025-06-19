<?php
include "connection.php";

$id = $_POST['id'];

$sql = "SELECT `RID`, `MOLD_CTRL`, `ITEM_CODE`, `ITEM_NAME`, `CUSTOMER`, `MODEL`, `MAKER`, `CATEGORY`, `MOLD_LOCATION`, `MARK`, `MOLD_STATUS`, `COLOR_CODE`, `GUARANTEE`, `CAVITY`, `TRANSFER_DATE`, `APPROVAL_DATE`, `MOLD_CONDITION` FROM mold_masterlist WHERE RID = $id";
$result = $conn->query($sql);

// Convert result set to JSON
$records = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $records['a'] = $row['RID'];
        $records['b'] = $row['MOLD_CTRL'];
        $records['c'] = $row['ITEM_CODE'];
        $records['d'] = $row['ITEM_NAME'];
        $records['e'] = $row['CUSTOMER'];
        $records['f'] = $row['MODEL'];
        $records['g'] = $row['MAKER'];
        $records['h'] = $row['CATEGORY'];
        $records['i'] = $row['MOLD_LOCATION'];
        $records['j'] = $row['MARK'];
        $records['k'] = $row['MOLD_STATUS'];
        $records['l'] = $row['COLOR_CODE'];
        $records['m'] = $row['GUARANTEE'];
        $records['n'] = $row['CAVITY'];
        $records['o'] = $row['TRANSFER_DATE'];
        $records['p'] = $row['APPROVAL_DATE'];
        $records['q'] = $row['MOLD_CONDITION'];
    }
}

header('Content-Type: application/json');
echo json_encode($records);

?>