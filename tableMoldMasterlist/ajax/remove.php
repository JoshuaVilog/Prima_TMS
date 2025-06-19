<?php
include "connection.php";

date_default_timezone_set('Asia/Manila');
$createdAt = date("Y-m-d H:i:s");
$getIP = getClientIP();

$id = $_POST['id'];

$conn->query("UPDATE
    `mold_masterlist`
    SET
    `DELETED_AT` = '$createdAt'
    WHERE
    `RID` = $id
    ");

?>