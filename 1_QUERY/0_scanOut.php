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

    $sql = "SELECT `RID`, `REMARKS` FROM `request_masterlist` WHERE MOLD_CODE = '$barcode'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    

    if(mysqli_num_rows($result) > 0){
        // IF YES
        
        $remarks = $row['REMARKS'];
        $id = $row['RID'];

        if($remarks == "2"){
            // IF OUT
            echo "IS OUT";
        } else if($remarks = "1"){
            // IF IN

            $conn->query("UPDATE
                `request_masterlist`
            SET
                `REMARKS` = '2',
                `DATE_OUT` = '$date'
            WHERE
                `RID` = $id");

            echo "OUT";
        }
        



    } else {
        // IF NO

        echo "NO MOLD";


    }
    

    

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();











?>