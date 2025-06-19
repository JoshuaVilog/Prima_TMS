<?php
include "connection.php";

$desc = $_POST['desc'];


$sql = "SELECT RID FROM `list_category` WHERE CATEGORY_DESC = '$desc'";
$result = $conn->query($sql);


if(mysqli_num_rows($result) != 0){
    echo "duplicate";
} else {
    $conn->query("INSERT INTO `list_category`(
        `RID`,
        `CATEGORY_DESC`
    )
    VALUES(
        DEFAULT,
        '$desc'
    )");
}

?>