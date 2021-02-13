window.onclick = function (e) {
    var contextS = document.getElementById("contextS");

    if (e.target.id == "cancel") { contextS.value = ""; }//input 부분을 삭제하는 부분

    if (e.target.id == 'no1' || e.target.id == 'no2' || e.target.id == 'no3' || e.target.id == 'no4' || e.target.id == 'no5' || e.target.id == 'no6' ||
        e.target.id == 'no7' || e.target.id == 'no8' || e.target.id == 'no9' || e.target.id == 'plus' || e.target.id == 'minus' || e.target.id == 'mutiple' ||
        e.target.id == 'divide' || e.target.id == 'no0') { contextS.value += e.target.innerHTML; }//숫자가 들어가는 부분

    function trans_digit(arg) {//콤마를 없애는 함수
        let gaved_string = arg;
        let new_string = '';
        for (let i = 0; i < gaved_string.length; i++) {
            if (gaved_string[i] != ",") { new_string += gaved_string[i] }
        }
        //contextS.value=Number(new_string);
        return new_string;
    }
    if (e.target.id == "answer") { // equal 함수
        contextS.value = String(eval(trans_digit(contextS.value)));
        let resultArray = contextS.value;// transdigit한거를 넘겨야 한다. 계산하게 해야 한다. 

        function commaAdd(arg) {
            let myNR = [];
            let myF = 1;
            let resultString = "";
            let matchN = 0;
            let inCommas = [];
            var myN = String(arg);//받은 숫자를 문자화
            for (let i = 0; i < myN.length; i++) {// 문자의 길이만큼 반복
                if (myN[i] == ".") {//만약 . 있다면(소수점 갯수)
                    matchN = i;// matchN의 i번째 값은 . 있고 멈춤. 구분 값.
                    //break;
                }
            }
            if (matchN !== 0) {// 만약 소수점이 있다면, 
                for (let i = 0; i < matchN; i++) {// 점에 해당 하는 앞 부분까지 담고
                    inCommas += myN[i];
                }
                for (let i = inCommas.length - 1; i >= 0; i--) {// 해당 앞 부분에 3자리씩 ,를 찍음
                    myNR.unshift(inCommas[i]);
                    if (myF % 3 == 0 && i !== 0) { myNR.unshift(","); }
                    myF++;
                }
                for (let i = 0; i < myNR.length; i++) {// myNR-세자리 찍은 배열을 빈 문자에 넣고
                    resultString += myNR[i];
                }
                for (let i = matchN; i < myN.length; i++) {//점 뒤를 시작으로 전체 문자 길이만큼 다시 넣음.
                    resultString += myN[i];
                }
                contextS.value = resultString;// 그 값을 다시 context.value 값에 넣음
            } else {
                for (let i = myN.length - 1; i >= 0; i--) {
                    myNR.unshift(myN[i]);
                    if (myF % 3 == 0 && i !== 0) {
                        myNR.unshift(",");
                    }
                    myF++;
                }
                for (let i = 0; i < myNR.length; i++) {// myNR-세자리 찍은 배열을 빈 문자에 넣고
                    resultString += myNR[i];
                }
                contextS.value = resultString;

            }
        }

        commaAdd(resultArray);
    }

    if (e.target.id == "back") {
        let present_value = contextS.value;
        let new_array = [];
        function remove_digit(arg1) {
            let removed_string = '';
            for (let i = 0; i < arg1.length; i++) {
                new_array.push(arg1[i]);
            }
            new_array.pop();
            for (let i = 0; i < new_array.length; i++) {
                removed_string += new_array[i]
            }
            return contextS.value = removed_string;// back키			
        }
        remove_digit(present_value);
    }
}

