<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="./css/main_page.css">
    </head>
    <body>
    <!--메인 화면-->
    <nav class="main_screen">
        <!--메인 화면 헤더-->        
        <section class="main_header">
            <!--
            <a href="./main_page.php" class="move_main_page">              
                <img src="./img/lemon.png" class="site_logo">
                <span class="go_main_page">메인페이지 이동</span>
            </a>
            -->
                <article class="sub_main_header">
                    <div class="btn_area">
                    <!--버튼 추가사이트-->
                    <button class="user_plus_btn" id="user_plus_btn">즐겨찾기 추가하기</button>
                    </div>
                    <!--
                    <div class="search_area">
                        <button class="search_button" id="search_button">검색
                    </div>
                    -->
                </article>
        </section>

    <?php
        echo <<<END
        <form action="./main_page.php" method="GET">
            <section id="search_window" class="search_window">  
                <div class="modal_dsn_title">검색<span class="sub_modal_ment">한 가지의 조건을 입력해주세요.</span></div>                 
                <div class="cancel_btn" id="cancel_btn">
                    <img src="./img/cancel.png" id="cancel_img" class="cancel_img img_close" alt="cancel">                
                </div>
                    
                    <label class="modal_add_info">
                                <span class="modal_add_info_text site_title">사이트명</span>                                
                                <input type="text" class="input_info site_info" name="site_name" id="site_name" maxlength="15" value="" autofocus>   
                    </label>
                                <input type="hidden"  class="input_info" name="site_intro" id="site_intro" maxlength="40" value="" autofocus>          
                                <input type="hidden"  class="input_info" name="site_url" id="site_url" maxlength="40" value="" autofocus>   
                    
                    <div class="select_design">OR</div>                 
                    <label class="modal_add_info division_table">
                            <span class="info_division">분류</span>                    
                            <select name="division" class="division" id="division">
                                    <option value="미디어">미디어</option>
                                    <option value="IT">IT </option>
                                    <option value="금융">금융</option>
                                    <option value="검색">검색</option>
                                    <option value="일자리">일자리</option>
                                    <option value="쇼핑">쇼핑</option>
                                    <option value="FUN">FUN</option>
                            </select>    
                    </label>     
                    <button type="sumbit" id="search_user_btn"  name="search" class="search_user_btn">검색하기</button>
            </section>
        </form>
END;
//찾기
   
    
?>
        <!--일반화면-->
        <article>        
            <?php
                include "./inc/info.inc";
                session_start();
                if(!isset($_SESSION['like_log_id']) || !isset($_SESSION['like_log_pw'])){
                include './screen_login.php';
                }else{
                //여기에 메인 파을 가지고 오는 것으로 짜자
                $user_id =$_SESSION['like_log_id'];
                $user_pw =$_SESSION['like_log_pw'];
                echo "<div class='btn_posi'>";
                echo "<p class='user_welcome'>안녕하세요!!&nbsp;($user_id)님&nbsp;&#128512;</p>";
                echo "<p class='logout_ment'><a href='logout.php' class='logout'>로그아웃</a></p>"; 
                echo "</div>";
                }
            ?>
        </article>
        <article class="like_site_info_head">    
                <div class="like_site_logo">I LIKE IT SITE</div>                                    
            </article>
        <section class="show_table">            
            <article class="like_site_info_main">  
                <div class="site_list">
                    <!--
                    <span class="site_list_desc list1">번호</span>
                    -->
                    <span class="site_list_desc list2">사이트명</span>
                    <span class="site_list_desc list3">간단소개</span>
                    <span class="site_list_desc list4">사이트주소</span>
                    <span class="site_list_desc list5">분류</span>
                    <span class="site_list_desc list6">추가기능</span>
                </div>
                <?php
                if(isset($_GET['search'])){
                    include "./inc/info.inc";
                    $conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);   
                    if(!$conn){
                        echo "Unable to connect to DB: ".mysql_error();
                        exit;
                    }                
                    if(!mysqli_select_db($conn, "c12st20")){
                        echo "Unable to select mydbname: ".mysql_error();
                        exit;
                    }
                        $show_table ="SELECT*FROM `favorite_site` order by `id` asc";
                        $show_result = mysqli_query($conn, $show_table);                
                    if(mysqli_num_rows($show_result) == 0){
                    echo "<script>alert('찾는 자료가 없습니다.');</script>";
                    exit;
                    }        
                    $division = $_GET['division'];  
                // $site_name = $_GET['site_name'];
                // $site_intro = $_GET['site_intro'];
                // $site_url = $_GET['site_url'];         
                // $num5 = date("Y-m-d H:i:s",time());    
                // echo $site_name;
                // echo "<br>";
                // echo $division;
                // echo "<br>";
                // echo $site_intro;
                // echo "<br>";
                // echo $site_url;
                // echo "<br>";
                // echo $num5;         
                    $sql1 = "SELECT * FROM favorite_site where division= '{$division}'";        
                // $sql2 = "SELECT division From favorite_site where division LIKE '{$division}'";                            
                    $result = mysqli_query($conn, $sql1);                                                
                    //echo $result;
                    while($show_record = mysqli_fetch_assoc($result)){                             
                        echo '<ul class="like_site_list">';
                            echo '<li class="record_dsn record1">'.$show_record['id'].'</li>';
                            echo '<li class="record_dsn record2">'.$show_record['name'].'</li>';
                            echo '<li class="record_dsn record3">'.$show_record['introduction'].'</li>';
                            echo '<li class="record_dsn record4"><a href="'.$show_record['address'].'" target="_blank" >'.$show_record['address'].'</a></li>';
                            echo '<li class="record_dsn record5">'.$show_record['division'].'</li>';                            
                            echo '<form action="./del_user.php" method="GET">';
                                echo '<input class="del_site" type="submit" value="삭제">';                            
                            echo "<input type='hidden'   name='id'  value='{$show_record['id']}'>";                        
                            echo '</form>';   
                            echo '<input class="update_site" id="update_site" type="submit" value="수정">';                          
                            echo <<<END
                            <form action="./update_site_content.php" method="GET"> 
                        <section id="update_site_window" class="update_site_window">
                            <input type='hidden' name='update_id'  value={$show_record['id']}>
                            <div class="cancel_btn" id="cancel_btn">
                                <img src="./img/cancel.png" id="cancel_img" class="cancel_img img_close" alt="cancel">                
                            </div>
                                <span class="modal_dsn_title">즐겨찾기 수정</span>                 
                                <div class="input_info_box">
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text site_title">사이트명</span>
                                        <input type="text"  class="input_info site_info" name="site_name" maxlength="15"  value="{$show_record['name']}" autofocus>   
                                        </label>
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text">사이트 소개</span>
                                        
                                        <input type="text"  class="input_info" name="site_intro"  maxlength="40" value="{$show_record['introduction']}" autofocus>   
                                    </label>
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text">사이트 주소</span>
                                    
                                        <input type="text"  class="input_info" name="site_url"  maxlength="40" value="{$show_record['address']}" autofocus>   
                                    </label>                            
                                    
                                    <label class="modal_add_info">
                                        <span class="info_division">분류</span>                    
                                        <select name="division" class="division">
                                            <option value="{$show_record['division']}" selected>{$show_record['division']}</option>
                                            <option value="미디어">미디어</option>
                                            <option value="IT">IT </option>
                                            <option value="금융">금융</option>
                                            <option value="검색">검색</option>
                                            <option value="일자리">일자리</option>
                                            <option value="쇼핑">쇼핑</option>
                                            <option value="FUN">FUN</option>
                                        </select>    
                                    </label>      
                                    
                                    <button type="submit" id="add_user_btn"  name="insert" class="add_user_btn">수정</button>
                            </div>  
                    </section>    
                    </form>    
                    <form action="./del_user.php" method="GET">
                        <div class="confirm_del">
                            <span class="confirm_del_ment">정말로 삭제하시겠습니까?</span>
                            <input class="confirm_del_button" type="submit" value="삭제">
                            <input type="hidden" name="delete" value={$show_record['id']}>
                            <input class="confirm_del_cancel" value="닫기">
                        </div>
                    </form>
END;
                    echo '</ul>';    
            }
    } else{
                $conn = mysqli_connect($db_host, $db_id ,$db_login_pw, $db_db);   
                if(!$conn){
                    echo "Unable to connect to DB: ".mysql_error();
                    exit;
                }
                
                if(!mysqli_select_db($conn, "c12st20")){
                    echo "Unable to select mydbname: ".mysql_error();
                    exit;
                }
                $show_table ="SELECT*FROM `favorite_site` order by `id` asc";
                $show_result = mysqli_query($conn, $show_table);
                
                if(mysqli_num_rows($show_result) == 0){
                    echo "<script>alert('찾는 자료가 없습니다.');</script>";
                    exit;
                }
                while($show_record = mysqli_fetch_assoc($show_result)){                    
                    echo '<ul class="like_site_list">';
                        //echo '<li class="record_dsn record1">'.$show_record['id'].'</li>';
                        echo '<li class="record_dsn record2">'.$show_record['name'].'</li>';
                        echo '<li class="record_dsn record3">'.$show_record['introduction'].'</li>';
                        echo '<li class="record_dsn record4"><a href="'.$show_record['address'].'" target="_blank" >'.$show_record['address'].'</a></li>';
                        echo '<li class="record_dsn record5">'.$show_record['division'].'</li>';                            
                        //echo '<form action="./del_user.php" method="GET">';
                            echo '<input class="del_site" type="submit" value="삭제">';                            
                           // echo "<input type='hidden'   name='id'  value='{$show_record['id']}'>";                        
                       // echo '</form>';   
                        echo '<input class="update_site" id="update_site" type="submit" value="수정">';                          
                        echo <<<END
                    <form action="./update_site_content.php" method="GET"> 
                    <section id="update_site_window" class="update_site_window">
                        <input type='hidden' name='update_id'  value={$show_record['id']}>
                        <div class="cancel_btn" id="cancel_btn">
                            <img src="./img/cancel.png" id="cancel_img" class="cancel_img img_close" alt="cancel">                
                        </div>
                                <span class="modal_dsn_title">즐겨찾기 수정</span>                 
                            <div class="input_info_box">
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text site_title">사이트명</span>
                                        <input type="text"  class="input_info site_info" name="site_name" maxlength="15"  value="{$show_record['name']}" autofocus>   
                                        </label>
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text">사이트 소개</span>
                                        
                                        <input type="text"  class="input_info" name="site_intro"  maxlength="40" value="{$show_record['introduction']}" autofocus>   
                                    </label>
                                    <label class="modal_add_info">
                                        <span class="modal_add_info_text">사이트 주소</span>
                                    
                                        <input type="text"  class="input_info" name="site_url"  maxlength="40" value="{$show_record['address']}" autofocus>   
                                    </label>                            
                                    
                                    <label class="modal_add_info">
                                        <span class="info_division">분류</span>                    
                                        <select name="division" class="division">
                                            <option value="{$show_record['division']}" selected>{$show_record['division']}</option>
                                            <option value="미디어">미디어</option>
                                            <option value="IT">IT </option>
                                            <option value="금융">금융</option>
                                            <option value="검색">검색</option>
                                            <option value="일자리">일자리</option>
                                            <option value="쇼핑">쇼핑</option>
                                            <option value="FUN">FUN</option>
                                        </select>    
                                    </label>   
                                    <button type="submit" id="add_user_btn"  name="insert" class="add_user_btn">수정</button>
                            </div>  
                    </section>    
                    </form>    
                    <form action="./del_user.php" method="GET">
                        <div class="confirm_del">
                            <span class="confirm_del_ment">정말로 삭제하시겠습니까?</span>
                            <input class="confirm_del_button" type="submit" value="삭제">
                            <input type="hidden" name="delete" value={$show_record['id']}>
                            <input class="confirm_del_cancel" value="닫기">
                        </div>
                    </form>
END;
                    echo '</ul>';    
                }
}
                ?>
            </article>            
        </section>
        
        <!--추가하기-->
        <form action="./insert_site.php" method="GET">
            <section id="add_user" class="add_user">  
            <div class="cancel_btn" id="cancel_btn">
                    <img src="./img/cancel.png" id="cancel_img" class="cancel_img" alt="cancel">                
                </div>
                        <span class="modal_dsn_title">즐겨찾기 추가</span>                 
                    <div class="input_info_box">
                            <label class="modal_add_info">
                                <span class="modal_add_info_text site_title">사이트명</span>
                                <!--문자열 정규식 추가-->
                                <input type="text" class="input_info site_info" name="site_name" id="site_name" maxlength="15" autofocus>   
                            </label>
                            <label class="modal_add_info">
                                <span class="modal_add_info_text">사이트 소개</span>
                                <!--문자열 정규식 추가-->
                                <input type="text"  class="input_info" name="site_intro" id="site_intro" maxlength="40" autofocus>   
                            </label>
                            <label class="modal_add_info">
                                <span class="modal_add_info_text">사이트 주소</span>
                            <!--문자열 정규식 추가-->
                                <input type="text"  class="input_info" name="site_url" id="site_url" maxlength="40" autofocus>   
                            </label>                            
                            <!--문자열 정규식 추가-->       
                            <label class="modal_add_info">
                                <span class="info_division">분류</span>                    
                                <select name="division" class="division" id="division">
                                    <option value="미디어">미디어</option>
                                    <option value="IT">IT </option>
                                    <option value="금융">금융</option>
                                    <option value="검색">검색</option>
                                    <option value="일자리">일자리</option>
                                    <option value="쇼핑">쇼핑</option>
                                    <option value="FUN">FUN</option>
                                </select>    
                            </label>     
                            <!--
                            <div class="canvas_box">
                                <span class="insert_cap">일련번호 입력</span>
                                <canvas id="display_random" class="display_random">6679</canvas>                        
                                <input type="text" id="insert_random_num" name="insert_random_num" class="insert_random_num" size="10" maxlength="4"> 
                            </div>
                            --> 
                            <button id="add_user_btn"  name="insert" class="add_user_btn">추가</button>
                    </div>  
            </section>
        </form>
    </nav>
    <script src="./js/jquery360.min.js"></script>    
    <script>        
        $(document).ready(function(){
            $(".confirm_del").css("display","none");
            $(".add_user").css("display","none");
        });
        //사이트 추가 버튼
        $("#user_plus_btn").on("click" , function(){
            $(".add_user").css("display","block");
        });

        //업데이트 창과 추가 버튼 닫기 
        $(".cancel_btn").on("click", function(){            
            $(".add_user").css("display","none");
            $(".update_site_window").css("display","none");
        });
        
        $(".cancel_img").on("click",function(){
            $(".search_window").css("display","none");
        })

        $(".search_button").on("click",function(){
             $(".search_window").css("display","block");
        })

        $(".confirm_del_cancel").on("click",function(){
            $(".confirm_del").css("display","none");
        })
        //삭제확인 창 띄어주는 거
        $(".del_site").on("click",function(e){
            $(e.target).parent().children().last().children().css("display","block");
        })
        $(window).on("click",function(e){
            console.log(e.target.className);
        });
        //업데이트창 띄어주는 것
        $(".update_site").on("click",function (e) {           
            $(e.target).parent().children().last().prev().children().css("display","block");
        });
        
        //로그인 버튼에 캡차 들어가는 버튼 
        window.onload = function(){
            const display_random=document.getElementById("display_random");
            const magic_number = Math.floor(Math.random()*(9999-1000+1))+1000;
            const ctx=  display_random.getContext("2d");
            ctx.font = "60pt Arial";
            ctx.fillStyle="red";
            ctx.textAlign ="center";
            ctx.fillText(magic_number, display_random.width/2, display_random.height/1.5);
            
            $("#add_user_btn").on("click",function (e) {
                if(magic_number == $("#insert_random_num").val()){      
                   // alert($("#site_name").val()+"\n"+$("#site_intro").val()+"\n"+$("#site_url").val()+"\n"+$("#division").val(););
                    location.href = "./insert_site.php?site_name="+$("#site_name").val()+"&site_intro="+$("#site_intro").val()+"&site_url="+$("#site_url").val()+"&division="+$("#division").val();
                }else{                
                    alert("일련번호가 일치하지 않습니다.") || e.preventDefault() || $("#insert_random_num").val("").focus().css("background-color"," #4169E1");                                   
                }
            })
        }
    </script>
    </body>
</html>