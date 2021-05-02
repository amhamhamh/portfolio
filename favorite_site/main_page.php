<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
</head>
<?php
    /*
    session_start();
    if(!isset($_SESSION['user_id']) || !isset($_SESSION['user_pw'])) {
    //if(!isset($_COOKIE['user_id']) || !isset($_COOKIE['user_name'])) {
    echo "<meta http-equiv='refresh' content='0;url=./login.php'>";
    exit;
    }
            $user_id =$_SESSION['user_id'];
        $user_pw =$_SESSION['user_pw'];
            
        echo "<p>안녕하세요. ($user_id)님</p>";
        echo "<p><a href='logout.php'>로그아웃</a></p>";   
    */   
?>
<body>
<form action="./like_site.php" name="action" method="GET">       
        <input type="text" name="name">제목
        <input type="text" name="introduction">간단소개
        <input type="date" name="date">등록날자
        <input type="text" name="address">사이트주소 
        <input type="text" name="division">구역        
        <input type="submit" name="action" value="insert">
        <input type="submit" name="action" value="search">
        <input type="submit" name="action" value="delete">
        <input type="submit" name="action" value="update">        
    </form>    
    </body>
  </html>