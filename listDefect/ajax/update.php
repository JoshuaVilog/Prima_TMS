<?php
include "connection.php";

$desc = $_POST['desc'];
$id = $_POST['id'];


$sql = "SELECT RID FROM `list_defect` WHERE DEFECT_DESC = '$desc'";
$result = $conn->query($sql);

if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("UPDATE
    `list_defect`
SET
    `DEFECT_DESC` = '$desc'
WHERE
    `RID` = $id");
}

?>