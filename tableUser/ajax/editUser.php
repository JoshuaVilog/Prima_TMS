<?php
include "connection.php";

$id = $_POST['userId'];
$lastname = $_POST['lastname'];
$firstname = $_POST['firstname'];
$middlename = $_POST['middlename'];
$email = $_POST['email'];
$username = $_POST['username'];
// $department = $_POST['department'];
// $position = $_POST['position'];
$role = $_POST['role'];
// $status = $_POST['status'];

$conn->query("UPDATE
    `user`
    SET
    `USER_LNAME` = '$lastname',
    `USER_FNAME` = '$firstname',
    `USER_MNAME` = '$middlename',
    `EMAIL` = '$email',
    `USERNAME` = '$username',
    `USER_ROLE` = '$role'
    WHERE
    `USER_ID` = '$id'
");

?>