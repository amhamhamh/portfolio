<?php
echo<<<END
    <!DOCTYPE html>
    <html lang="ko">
    <html>
        <head>
            <meta charset="utf-8">
            <title>LIKE_SITE_LOGIN</title>
            <link rel="stylesheet" href="./css/like_site_site.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </head>
        <body> 
            <form action="./login_ok.php" method="POST">
                <div class="like_log_main">           
                    <h1 class="like_site_title">$site_title</h1>
                        <!--login area-->
                        <input type="text" name="like_log_id"  id="like_log_id" class="like_log_id" maxlength="10" placeholder=" ID 입력" required>
                        <input type="password" name="like_log_pw" id="like_log_pw" class="like_log_pw" maxlength="10" placeholder=" PW 입력" required>
                        <!--login area end-->

                        <!--capcha area-->
                        <canvas id="like_log_cc" class="like_log_cc"></canvas>
                        <div id="like_log_ref" class="like_log_ref">새로고침</div>
                        <!--capcha area end-->
                        
                        <!--login area-->
                        <input type="number" name="like_log_in" class="like_log_in" id="like_log_in" maxlength="4" placeholder="표시된 숫자입력">
                        <input type="submit" id="like_log_log" name="action" class="like_log_log" value="login">
                        <!--login area end-->
                </div>
            </form>
            <script src="./js/jquery360.min.js"></script>
            <script src="./js/like_site.js"></script>
        </body>
    </html>
END;
?>