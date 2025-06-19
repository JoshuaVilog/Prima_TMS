<?php
include "connection.php";

$desc = $_POST['desc'];
$id = $_POST['id'];


$sql = "SELECT RID FROM `list_occured` WHERE OCCURED_DESC = '$desc'";
$result = $conn->query($sql);

if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("UPDATE
    `list_occured`
SET
    `OCCURED_DESC` = '$desc'
WHERE
    `RID` = $id");
}

?>