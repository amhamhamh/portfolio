<?php
    session_start();
    $user_id =$_SESSION['user_id'];
    $user_pw =$_SESSION['user_pw'];

    if(!isset($_SESSION['user_id']) || !isset($_SESSION['user_pw'])) {
    //if(!isset($_COOKIE['user_id']) || !isset($_COOKIE['user_name'])) {
    echo "<meta http-equiv='refresh' content='0;url=./login.php'>";
    exit;
    }
    $user_id =$_SESSION['user_id'];
    $user_pw =$_SESSION['user_pw'];     
    
    echo "<div>"
?>