<?php

include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    $moldCtrl = $_POST['moldCtrl'];
    $find = $moldCtrl."-YES";

    $sql = "SELECT `RID`, `PR_NO`, `MOLD_CTRL`, `DATE`, `TYPE`, `CATEGORY`, `DEFECT`, `STATUS`, `PRIORITY`, `REMARKS` FROM `request_masterlist` WHERE CONCAT(MOLD_CTRL, '-',(CASE WHEN STATUS != '4' THEN 'YES' ELSE STATUS END), COALESCE(DELETED_AT, '')) = '$find'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        // IF YES
        $records = array();

        while ($row = $result->fetch_assoc()) {

            $records["a"] = $row['RID'];
            $records["b"] = $row['PR_NO'];
            $records["c"] = $row['MOLD_CTRL'];
            $records["d"] = $row['DATE'];
            $records["e"] = $row['TYPE'];
            $records["f"] = $row['CATEGORY'];
            $records["g"] = $row['DEFECT'];
            $records["h"] = $row['STATUS'];
            $records["i"] = $row['PRIORITY'];
            $records["j"] = $row['REMARKS'];
            
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