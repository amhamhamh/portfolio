<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         table{
            border: 1px solid red; border-collapse: collapse;
        }
        td{
            border: 1px solid red;
            padding: 5px;
        }
    </style>
</head>
<body>
    <?php
        $conn = mysqli_connect("localhost", "c12st20","LKIKsNZqInF8NqaO", "c12st20");        

        if(!$conn){
            echo "Unable to connect to DB: ".mysql_error();
            exit;
        }else{
            if(!mysqli_select_db($conn, "c12st20")){
                echo "Unable to select mydbname: ".mysql_error();
                exit();
            }else{
                if(@isset($_GET['action'])){       
                    $num1=$_GET['name'];
                    $num2=$_GET['introduction'];
                    $num3=$_GET['date'];
                    $num4=$_GET['address'];
                    $num5=$_GET['division'];                    
                    switch($_GET['action']){            
                        case 'insert':                               
                        $sql1 = "INSERT INTO `favorite_site` VALUES ('','$num1', '$num2', '$num3', '$num4', '$num5')";
                        break;    
                        case 'delete':
                        $sql1 = "DELETE FROM favorite_site where name='".$num1."'";
                        break;    
                        case 'update':
                        $sql1 = "UPDATE favorite_site SET name='{$num1}', introduction='{$num2}',  date='{$num3}', address='{$num4}', division='{$num5}' where name='{$num1}'";
                        break;
                        case 'search':
                        $sql1 = "SELECT * FROM favorite_site";        
                    }    
                    
                    $result = mysqli_query($conn, $sql1);//입력하는 결과
                    
            
                    if(!$result){
                        echo "Could not successfully run query($sql1) from DB: ".mysql_error();
                        exit;
                    }else{
                        if(mysqli_num_rows($result) == 0){
                            echo "No rows found, nothing to print so am exiting";
                            exit;
                        }else{
                            echo "<table>";
                            while($row = mysqli_fetch_assoc($result)){
                                echo "<tr><td>{$row['id']}</td><td>{$row['name']}</td><td>{$row['introduction']}</td><td>{$row['date']}</td><td>{$row['address']}</td><td>{$row['division']}</td></tr>";
                            }
                            echo "</table>";
                            mysqli_free_result($result);
                        }
                    }                               
                }
            }
        }
    ?>
</body>
</html>