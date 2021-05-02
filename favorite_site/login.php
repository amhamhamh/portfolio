<!DOCTYPE html>
<html lang="en">
    <style>
         table{
            border: 1px solid red; border-collapse: collapse;
        }
        td{
            border: 1px solid red;
            padding: 5px;
        }
    </style>
    <meta charset="UTF-8">
    <form action="./login_ok.php"  method="POST">
        <input type="text" name="user_id">
        <input type="password" name="user_pw">
        <input type="submit" name='action' value="login">
    </form>