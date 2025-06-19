<?php
include "connection.php";

$desc = $_POST['desc'];
$id = $_POST['id'];


$sql = "SELECT RID FROM `list_request_type` WHERE REQUEST_TYPE_DESC = '$desc'";
$result = $conn->query($sql);

if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("UPDATE
    `list_request_type`
SET
    `REQUEST_TYPE_DESC` = '$desc'
WHERE
    `RID` = $id");
}

?>