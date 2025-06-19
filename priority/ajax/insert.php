<?php
include "connection.php";

$mold1 = $_POST['mold1'];
$mold2 = $_POST['mold2'];
$mold3 = $_POST['mold3'];
$mold4 = $_POST['mold4'];
$mold5 = $_POST['mold5'];
$userCode = $_POST['userCode'];

$getIP = getClientIP();

$conn->query("INSERT INTO `priority_masterlist`(
    `RID`,
    `TOP_1`,
    `TOP_2`,
    `TOP_3`,
    `TOP_4`,
    `TOP_5`,
    `CREATED_BY`,
    `CREATED_IP`
)
VALUES(
    DEFAULT,
    '$mold1',
    '$mold2',
    '$mold3',
    '$mold4',
    '$mold5',
    '$userCode',
    '$getIP'
)");

?>