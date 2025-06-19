<?php
include "connection.php";

try {
    // Begin a transaction
    $conn->begin_transaction();

    // $data = json_decode(file_get_contents("php://input"), true);

    $desc1 = $conn->real_escape_string($_POST['desc1']);
    $desc2 = $conn->real_escape_string($_POST['desc2']);
    $desc3 = $conn->real_escape_string($_POST['desc3']);
    $desc4 = $conn->real_escape_string($_POST['desc4']);
    $desc5 = $conn->real_escape_string($_POST['desc5']);
    $desc6 = $conn->real_escape_string($_POST['desc6']);
    $desc7 = $conn->real_escape_string($_POST['desc7']);
    $desc8 = $conn->real_escape_string($_POST['desc8']);
    $desc9 = $conn->real_escape_string($_POST['desc9']);
    $desc10 = $conn->real_escape_string($_POST['desc10']);
    $desc11 = $conn->real_escape_string($_POST['desc11']);
    $desc12 = $conn->real_escape_string($_POST['desc12']);
    $desc13 = $conn->real_escape_string($_POST['desc13']);
    $desc14 = $conn->real_escape_string($_POST['desc14']);
    $desc15 = $conn->real_escape_string($_POST['desc15']);
    $desc16 = $conn->real_escape_string($_POST['desc16']);
    // $userCode = $_POST['userCode'];
    $id = $_POST['id'];

    date_default_timezone_set('Asia/Manila');
    $createdAt = date("Y-m-d H:i:s");
    $getIP = getClientIP();

    // $sql = "SELECT RID FROM `mold_masterlist` WHERE MOLD_CTRL = '$desc1'";
    $sql = "SELECT RID FROM `mold_masterlist` WHERE CONCAT(MOLD_CTRL, COALESCE(DELETED_AT, '')) = '$desc1' AND RID != $id";
    $result = $conn->query($sql);


    if(mysqli_num_rows($result) != 0){
        echo "duplicate";
    } else {
        $conn->query("UPDATE
        `mold_masterlist`
    SET
        `MOLD_CTRL` = '$desc1',
        `ITEM_CODE` = '$desc2',
        `ITEM_NAME` = '$desc3',
        `CUSTOMER` = '$desc4',
        `MODEL` = '$desc5',
        `MAKER` = '$desc6',
        `CATEGORY` = '$desc7',
        `MOLD_LOCATION` = '$desc8',
        `MARK` = '$desc9',
        `MOLD_STATUS` = '$desc10',
        `COLOR_CODE` = '$desc11',
        `GUARANTEE` = '$desc12',
        `CAVITY` = '$desc13',
        `TRANSFER_DATE` = '$desc14',
        `APPROVAL_DATE` = '$desc15',
        `MOLD_CONDITION` = '$desc16',
        `UPDATED_IP` = '$getIP'
    WHERE
        `RID` = $id");

    }

    

    $conn->commit();

} catch (Exception $e) {
    // If any query fails, roll back the transaction to prevent partial data insertion
    $conn->rollback();
    echo "Transaction failed: " . $e->getMessage();
}

$conn->close();




?>