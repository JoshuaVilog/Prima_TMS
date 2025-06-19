<?php

include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    $moldCtrl = $_POST['moldCtrl'];
    $status = $_POST['status'];
    $find = $moldCtrl."-".$status;

    $sql = "SELECT `RID`, `PR_NO`, `MOLD_CTRL`, `MOLD_CODE`, `DATE`, `TYPE`, `CATEGORY`, `DEFECT`, `STATUS` FROM `request_masterlist` WHERE CONCAT(MOLD_CTRL, '-',STATUS, COALESCE(DELETED_AT, '')) = '$find'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        // IF YES
        $records = array();

        while ($row = $result->fetch_assoc()) {

            $records["a"] = $row['RID'];
            $records["b"] = $row['PR_NO'];
            $records["c"] = $row['MOLD_CTRL'];
            $records["d"] = $row['MOLD_CODE'];
            $records["e"] = $row['DATE'];
            $records["f"] = $row['TYPE'];
            $records["g"] = $row['CATEGORY'];
            $records["h"] = $row['DEFECT'];
            $records["i"] = $row['STATUS'];
            
        }

        header('Content-Type: application/json');
        echo json_encode($records);

    } else {
        echo "NONE";
    }

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();




?>