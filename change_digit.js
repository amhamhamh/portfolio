class Calculator {
    constructor(print_digit, input_digit, transfer_digit) { //생성자
        this.print_digit = print_digit;
        this.input_digit = input_digit;
        this.transfer_digit = transfer_digit;
    }


    make_transfer_digit = () => {
        var transfer_bitwise = $(this.input_digit).val(); //스트링 형태  
        var ten_zinsu_test = /^([0-9]){1,12}$/g;
        //10진법을 N진법으로
        if (ten_zinsu_test.test(transfer_bitwise)) {
            let divN = $(this.transfer_digit).val(); //스트링 형태
            switch (divN) {
                //10진수를 16진수로 바꾸기
                case "16":
                    let hexMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
                    let hexA = [];
                    let div_n = 16;
                    var sixteen_zinsu = "";
                    function decToHex(inV) {
                        hexA.unshift(hexMatrix[(inV % div_n)]);
                        if (inV < div_n) {
                            return;
                        } else {
                            inV = Math.floor(inV / div_n);
                        }
                        decToHex(inV);
                    }
                    decToHex(parseInt(transfer_bitwise));
                    sixteen_zinsu = hexA.join("");
                    $(this.print_digit).text(sixteen_zinsu);
                    break;
                    //10진수를 2진수로 바꾸기
                case "2":
                    var print_digit = [];
                    var second_zinsu = "";

                    function transfer_two(arg) {
                        print_digit.unshift(arg % divN);
                        if (arg < divN) {
                            return 0;
                        } else {
                            arg = Math.floor(arg / divN);
                        }
                        transfer_two(arg);
                    }
                    transfer_two(parseInt(transfer_bitwise));
                    second_zinsu = print_digit.join("");
                    $(this.print_digit).text(second_zinsu);
                    break;
                    //10진수를 8진수로 바꾸기
                case "8":
                    var print_digit = [];
                    var eight_zinsu = "";
                    function encode_digit(arg) {
                        print_digit.unshift(arg % divN);
                        if (arg < divN) {
                            return 0;
                        } else {
                            arg = Math.floor(arg / divN);
                        }
                        encode_digit(arg);
                    }
                    encode_digit(parseInt(transfer_bitwise));
                    eight_zinsu = print_digit.join("");
                    $(this.print_digit).text(eight_zinsu);
                    break;
                case '10':
                    $(this.print_digit).text(parseInt(transfer_bitwise));
                    break;
            }
        }
    }

    /*2,4,8,16,10진법을 10진법으로 변환*/
    transfer_ten_zinsu = () => {
        var test_second = /^([0-1]){1,12}$/g;
        var test_eight = /^([0-7]){1,12}$/g;
        var test_sixteen = /^([0-9ABCDEF]){1,12}$/gi;
        var test_ten = /^([0-9]){1,12}$/g;
        let divN = $(this.transfer_digit).val();
        var yepp = $(this.input_digit).val();
        switch (divN) {
            case "2":
                test_second.test(yepp) ? $(this.print_digit).text(translate_second(yepp)) : $(this.print_digit).text("2진수를 입력하세요");
                break;
            case "8":
                test_eight.test(yepp) ? $(this.print_digit).text(translate_eight(yepp)) : $(this.print_digit).text("8진수를 입력하세요");
                break;
            case "16":
                test_sixteen.test(yepp) ? $(this.print_digit).text(translate_sixteen(yepp)) : $(this.print_digit).text("16진수를 입력하세요");
                break;
            case "10":
                //test_ten.test(yepp) ? $(this.print_digit).text(yepp) : $(this.print_digit).text("10진수를 입력하세요");
                test_ten.test(yepp) ? $(this.print_digit).text(remove_ten_zen(yepp)) : $(this.print_digit).text("10진수를 입력하세요");
                break;
        }
        function remove_ten_zen(arg) {
            var transefer_bitwise = Number(arg);
            return transefer_bitwise;
        }
        //2진수로 변환
        function translate_second(arg) {
            var transefer_bitwise = arg;
            var conD = 2;
            var transefer_ten = 0;
            let i = 0;
            while (i < transefer_bitwise.length) {
                transefer_ten += transefer_bitwise[transefer_bitwise.length - 1 - i] * Math.pow(conD, i);
                i++;
            }
            return transefer_ten;
        }
        //8진수로 변환
        function translate_eight(arg) {
            var transefer_bitwise = arg;
            var conD = 8;
            var transefer_ten = 0;
            let i = 0;
            while (i < transefer_bitwise.length) {
                transefer_ten += transefer_bitwise[transefer_bitwise.length - 1 - i] * Math.pow(conD, i);
                i++;

            }
            return transefer_ten;
        }
        //16진수로 변환
        function translate_sixteen(arg) {
            var transefer_bitwise = arg;
            let hex_matrix = {
                "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,  "8": 8,  "9": 9, "A": 10, "B": 11, "C": 12, "D": 13,"E": 14,
                "F": 15, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15};
            let transfer_ten = 0;
            let i = 0;
            while (i < transefer_bitwise.length) {
                transfer_ten += hex_matrix[transefer_bitwise[(transefer_bitwise.length - 1) - i]] * Math.pow(16, i);
                i++;
            }
            return transfer_ten;
        }
    }
    //플러스 연산
    mix_cal_plus = () => {
        let box1_result = $("#print_area").html();
        let box2_result = $("#print_area1").html();
        if ($("#get_digit").val() == "" || $("#get_digit1").val() == "") {
            $("#alert_text").fadeIn(2000, "swing", function () {
                $("#alert_text").show();
                $("#alert_text").hide();
            });
        } else {
            if (box1_result > 0 && box2_result > 0) {
                var input_sum_result = parseInt(box1_result) + parseInt(box2_result);
                $("#result_digit").val(input_sum_result);
            } else {                
                $("#result_digit").text("");
            }
        }
    }
    //마이너스 연산
    mix_cal_minus = () => {
        
        let box1_result = $("#print_area").html();
        let box2_result = $("#print_area1").html();
        //양쪽 숫자가 입력되지 않을 때 나타나는 부분
        if ($("#get_digit").val() == "" || $("#get_digit1").val() == "") {
            $("#alert_text").fadeIn(2000, "swing", function () {
                $("#alert_text").show();
                $("#alert_text").hide();
            });
        } else {
            if (box1_result >= box2_result && box1_result > 0 && box2_result > 0) {
                console.log(box2_result);
                console.log(box1_result);
                console.log(minus_result);
                var minus_result = parseInt(box1_result) - parseInt(box2_result);
                $("#result_digit").val(minus_result);
            } else {
                if (Number(box1_result) < Number(box2_result)) {
                    $("#alert_text1").fadeIn(2000, "linear", function () {
                        $("#alert_text1").show();
                        $("#alert_text1").hide();
                    });
                }
            }
        }
    }
    //곱하기 연산
    mix_cal_multiple = () => {
        let box1_result = $("#print_area").html();
        let box2_result = $("#print_area1").html();
        if ($("#get_digit").val() == "" || $("#get_digit1").val() == "") {
            $("#alert_text").fadeIn(2000, "swing", function () {
                $("#alert_text").show();
                $("#alert_text").hide();
            });
        } else {
            if (box1_result > 0 && box2_result > 0) {
                var mutiple_result = parseInt(box1_result) * parseInt(box2_result);
                $("#result_digit").val(mutiple_result);
            } else {                
                $("#result_digit").text("");
            }
        }
    }
}


$(this).on("click change", function (e) { //출력구간, 입력숫자, 변환하는 진법
    let transfer_result = new Calculator($("#print_area"), $("#get_digit"), $("#transfer_digit"));
    let transfer_result1 = new Calculator($("#print_area1"), $("#get_digit1"), $("#transfer_digit1"));
    let sum_result = new Calculator($("#print_area2"), $("#result_digit"), $("#transfer_digit2"));
    let mix_cal = new Calculator($("#result_digit"));
    switch (e.target.id) {
        case "submit_digit1":
            transfer_result.transfer_ten_zinsu(); //박스 1값 n진수 입력
            break;
        case "submit_digit2":
            transfer_result1.transfer_ten_zinsu(); //박스 2값 n진수 입력
            break;
        case "transfer_digit2":
            sum_result.make_transfer_digit(); //결과값 10진수 입력
            break;
        case "plus":
            mix_cal.mix_cal_plus(); //플러스 연산
            break;
        case "minus":
            mix_cal.mix_cal_minus(); //마이너스 연산
            break;
        case "mutiple":
            mix_cal.mix_cal_multiple(); //곱하기 연산
            break;
    }
})



$(function () {
    $(".no_space").css("height", window.innerHeight);
})
