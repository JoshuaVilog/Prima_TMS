<?php
include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);
    // $desc = $conn->real_escape_string($_POST['desc']);
    // $userCode = $_POST['userCode'];

    $barcode = $_POST['barcode'];
    
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d");
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    $sql = "SELECT `RID`, `MOLD_CODE`, `CONTROL_NO`, `REQUEST_TYPE`, `DETAIL`, `REQUEST_DATE`, `TARGET_DATE`, `REMARKS`, `DATE_IN`, `DATE_OUT` FROM `request_masterlist` WHERE MOLD_CODE = '$barcode'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        // IF YES
        $records = array();

        while ($row = $result->fetch_assoc()) {

            $records["a"] = $row['RID'];
            $records["b"] = $row['MOLD_CODE'];
            $records["c"] = $row['CONTROL_NO'];
            $records["d"] = $row['REQUEST_TYPE'];
            $records["e"] = $row['DETAIL'];
            $records["f"] = $row['REQUEST_DATE'];
            $records["g"] = $row['TARGET_DATE'];
            $records["h"] = $row['REMARKS'];
            $records["i"] = $row['DATE_IN'];
            $records["j"] = $row['DATE_OUT'];
            
        }

        header('Content-Type: application/json');
        echo json_encode($records);



    } else {
        // IF NO

        $conn->query("INSERT INTO `request_masterlist`(
            `RID`,
            `MOLD_CODE`,
            `REMARKS`,
            `DATE_IN`
        )
        VALUES(
            DEFAULT,
            '$barcode',
            '1',
            '$date'
        )");

        $requestID = $conn->insert_id;

        $sql = "SELECT `RID`, `MOLD_CODE`, `CONTROL_NO`, `REQUEST_TYPE`, `DETAIL`, `REQUEST_DATE`, `TARGET_DATE`, `REMARKS`, `DATE_IN`, `DATE_OUT` FROM `request_masterlist` WHERE RID = '$requestID'";
        $result = $conn->query($sql);

        $records = array();
        while ($row = $result->fetch_assoc()) {

            $records["a"] = $row['RID'];
            $records["b"] = $row['MOLD_CODE'];
            $records["c"] = $row['CONTROL_NO'];
            $records["d"] = $row['REQUEST_TYPE'];
            $records["e"] = $row['DETAIL'];
            $records["f"] = $row['REQUEST_DATE'];
            $records["g"] = $row['TARGET_DATE'];
            $records["h"] = $row['REMARKS'];
            $records["i"] = $row['DATE_IN'];
            $records["j"] = $row['DATE_OUT'];
            
        }

        header('Content-Type: application/json');
        echo json_encode($records);


    }
    

    

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();











?>