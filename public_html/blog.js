$("#ldan>ul>li:odd").css("color", "#fbb034").css("margin-left", "0px");
$("#ldan>ul>li:even").css("width", "622px");
$("#ldan>ul>li:nth-child(2)").css("margin-left", "-139px");
$("#ldan>ul>li:nth-child(4)").css("margin-left", "-130px");
$("#ldan>ul>li:nth-child(6)").css("margin-left", "25px");

var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".typing-text>ul>li").length;
var typingTxt = $(".typing-text>ul>li").eq(liIndex).text();
typingTxt = typingTxt.split("");
if (typingBool == false) {
    typingBool = true;
    var tyInt = setInterval(typing, 100);

}

function typing() {
    $(".intro_ment ul li").removeClass("on");
    $(".intro_ment ul li").eq(liIndex).addClass("on");
    if (typingIdx < typingTxt.length) {
        $(".intro_ment ul li").eq(liIndex).append(typingTxt[typingIdx]);
        typingIdx++;


    } else {
        if (liIndex < liLength - 1) {
            liIndex++;
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".typing-text>ul>li").eq(liIndex).text();
            clearInterval(tyInt);
            setTimeout(function () {
                tyInt = setInterval(typing, 100);
            }, 1000);
        } else if (liIndex == liLength - 1) {
            clearInterval(tyInt);
        }
    }
}



var myDeg = 0;

function move_title() {
    myDeg++;
    $(".captain_menu").css("transform", "rotate(" + myDeg + "deg)");
}
setInterval("move_title()", 10);


$(this).on({
    "mouseover": function (e) {
        switch (e.target.id) {
            case "html_image":
                $("#score_input").text("80%");
                break;
            case "css_image":
                $("#score_input").text("80%");
                break;
            case "js_image":
                $("#score_input").text("80%");
                break;
            case "sass_image":
                $("#score_input").text("80%");
                break;
            case "mysql_image":
                $("#score_input").text("70%");
                break;
            case "pug_image":
                $("#score_input").text("60%");
                break;
            case "php_image":
                $("#score_input").text("60%");
                break;
            case "c_language_image":
                $("#score_input").text("65%");
                break;
            case "json_image":
                $("#score_input").text("70%");
                break;
            case "nodejs_image":
                $("#score_input").text("60%");
                break;
        }
    },
    "mouseout": function () {
        $("#score_input").text("");
    }
})

$(this).on({
    "mouseover": function (e) {
        switch (e.target.className) {
            case "btn1":
                $(".sub_profile1").css("visibility", "visible");
                break;
            case "btn2":
                $(".sub_profile2").css("visibility", "visible");
                break;
            case "btn3":
                $(".sub_profile3").css("visibility", "visible");
                break;
            case "btn4":
                $(".sub_profile4").css("visibility", "visible");
                break;
        }
    },
    "mouseout": function (e) {
        switch (e.target.className) {
            case "btn1":
                $(".sub_profile1").css("visibility", "hidden");
                break;
            case "btn2":
                $(".sub_profile2").css("visibility", "hidden");
                break;
            case "btn3":
                $(".sub_profile3").css("visibility", "hidden");
                break;
            case "btn4":
                $(".sub_profile4").css("visibility", "hidden");
                break;
        }
    }
})


var box_move = 0;

function move_sheild() {
    box_move++;
    $(".portfolio_box_menu").css("transform", "rotate(" + box_move + "deg)");
}

setInterval("move_sheild()", 50);

var portfolio_box = 0;

function move_portfolio() {
    portfolio_box++;
    $(".portfolio_box_menu>div").css("transform", "rotate(" + portfolio_box + "deg)");
    $(".portfolio_box_menu>div>span").css("transform", "rotate(" + portfolio_box + "deg)");
}
setInterval("move_portfolio()", 50);



$(this).on({
    "mouseenter": function (e) {
        switch (e.target.className) {
            case 'team_span':
                $(".team_project_img").css("opacity", 0);
                $(".team_span").text("팀프로젝트");
                $(".team_span").css("background-color", "white");
                break;
            case 'like_span':
                $(".like_site_img").css("opacity", 0);
                $(".like_span").text("즐겨찾기");
                $(".like_span").css("background-color", "white");
                break;
            case 'matrix_span':
                $(".matrix_calculator_img").css("opacity", 0);
                $(".matrix_span").text("행렬계산기");
                $(".matrix_span").css("background-color", "white");
                break;
            case 'zinsu_span':
                $(".zinsu-calculator_img").css("opacity", 0);
                $(".zinsu_span").text("진수계산기");
                $(".zinsu_span").css("background-color", "white");
                break;
            case 'brita_span':
                $(".brita_img").css("opacity", 0);
                $(".brita_span").text("상세페이지1");
                $(".brita_span").css("background-color", "white");
                break;
            case 'actto_span':
                $(".actto_img").css("opacity", 0);
                $(".actto_span").text("상세페이지2");
                $(".actto_span").css("background-color", "white");
                break;
            case 'bespoke_span':
                $(".bespoke_img").css("opacity", 0);
                $(".bespoke_span").text("상세페이지3");
                $(".bespoke_span").css("background-color", "white");
                break;
            case 'calculator_span':
                $(".calculator_img").css("opacity", 0);
                $(".calculator_span").text("계산기");
                $(".calculator_span").css("background-color", "white");
                break;
        }

    },
    "mouseout": function (e) {
        switch (e.target.className) {
            case 'team_span':
                $(".team_project_img").css("opacity", 1);
                $(".team_span").text("");
                $(".team_span").css("background-color", "transparent");
                break;
            case 'like_span':
                $(".like_site_img").css("opacity", 1);
                $(".like_span").text("");
                $(".like_span").css("background-color", "transparent");
                break;
            case 'matrix_span':
                $(".matrix_calculator_img").css("opacity", 1);
                $(".matrix_span").text("");
                $(".matrix_span").css("background-color", "transparent");
                break;
            case 'zinsu_span':
                $(".zinsu-calculator_img").css("opacity", 1);
                $(".zinsu_span").text("");
                $(".zinsu_span").css("background-color", "transparent");
                break;
            case 'brita_span':
                $(".brita_img").css("opacity", 1);
                $(".brita_span").text("");
                $(".brita_span").css("background-color", "transparent");
                break;
            case 'actto_span':
                $(".actto_img").css("opacity", 1);
                $(".actto_span").text("");
                $(".actto_span").css("background-color", "transparent");
                break;
            case 'bespoke_span':
                $(".bespoke_img").css("opacity", 1);
                $(".bespoke_span").text("");
                $(".bespoke_span").css("background-color", "transparent");
                break;
            case 'calculator_span':
                $(".calculator_img").css("opacity", 1);
                $(".calculator_span").text("");
                $(".calculator_span").css("background-color", "transparent");
                break;
        }
    }
});



$(this).on("click", function (e) {
    switch (e.target.className) {
        case "team_span":
            $("#team_project_1").css("display", "block");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "none");
            break;
        case 'like_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "block");
            break;
        case 'matrix_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "block");
            $("#like_site_port").css("display", "none");
            break;
        case 'zinsu_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "block");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "none");
            break;
        case 'brita_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "block");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "none");
            break;
        case 'actto_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "block");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "none");
            break;
        case 'bespoke_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "block");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "none");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "none");
            break;
        case 'calculator_span':
            $("#team_project_1").css("display", "none");
            $("#accto_intro").css("display", "none");
            $("#brita_intro").css("display", "none");
            $("#bespoke_intro").css("display", "none");
            $("#zinsu_calculator").css("display", "none");
            $("#calculator_port").css("display", "block");
            $("#maxtrix_port").css("display", "none");
            $("#like_site_port").css("display", "none");
            break;
    }
});


$("#business_card_show").on("click", function () {
    if ($(".business_card").hasClass('business_card_on')) {
        $(".business_card").removeClass('business_card_on');
        $(".business_card").addClass('business_card_off');
    } else {
        $(".business_card").addClass('business_card_on');
        $(".business_card").removeClass('business_card_off');
    }
})

$(this).on("click", function (e) {
    switch (e.target.className) {
        case 'brita_shorcut':
            console.log("브리타");
            break;
        case 'accto_shorcut':
            console.log("액토");
            break;
        case 'bespoke_shorcut':
            console.log("비스포크");
            break;
        case 'big_calculator':
            console.log("진입함");
            break;
    }
})


$(this).on("click", function (e) {
    switch (e.target.id) {
        case 'brita_shorcut':
            brita_move();
            $("#brita_shorcut").css("cursor", "pointer");
            break;
        case 'accto_shorcut':
            accto_shorcut();
            $("#accto_shorcut").css("cursor", "pointer");
            break;
        case 'bespoke_shorcut':
            bespoke_shorcut();
            $("#bespoke_shorcut").css("cursor", "pointer");
            break;
    }
})

function brita_move() {
    location.href = window.open('http://pager.kr/~c12st20/portfolio/product/brita.html');
    location.reload();
}

function accto_shorcut() {
    location.href = window.open('http://pager.kr/~c12st20/portfolio/product/actto.html');
    location.reload();
}

function bespoke_shorcut() {
    location.href = window.open("http://pager.kr/~c12st20/portfolio/product/Bespoke.html");
    location.reload();
}

// $(this).on("click", function (e) {
//     console.log(e.target.className);
// })   