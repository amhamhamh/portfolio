function make_matrix(cell_id, x_line, y_line, box_id) { //matrix를 만드는 함수
    this.cell_id = cell_id; // 셀id
    this.x_line = x_line; //x축
    this.y_line = y_line; //y축
    this.box_id = box_id; //만들어진 box의 id
    this.in_array = []; //값들을 담을 빈 배열
    this.array_string = ""; //출력할 때 쓸 빈 문자열

    this.reset_value = function () { //각 개별 box_id를 초기화함.       
        this.box_id.innerHTML = "";
        this.box_id.style.width = "";
        this.box_id.style.height = "";
    }

    this.zero_value = function () { //값이 0인 배열을 만드는 함수
        let i = 0;
        let j = 0;
        while (i < this.x_line) {
            this.in_array.push([]); // 빈 배열에 X축 만큼 배열을 넣음
            while (j < this.y_line) {
                this.in_array[i][j] = 0; // 그 값에 0을 대입함. 
                j++;
            }
            j = 0;
            i++;
        }
        return this.in_array; // 최종적으로 0으로 만들어진 배열을 출력함. 
    }

    this.make_value = function () { //랜덤 값 배열을 만들 함수. 
        let i = 0;
        let j = 0;
        while (i < this.x_line) {
            this.in_array.push([]);
            while (j < this.y_line) {
                this.in_array[i][j] = Math.floor(Math.random() * 101); // 랜덤 값을 담음.
                j++;
            }
            j = 0;
            i++;
        }
        return this.in_array; // 최종적으로 랜던 값을 만들어진 배열을 뱉음
    }

    this.make_cell = function () { // 만들어진 배열 값을 셀로 만드는 배열
        let i = 0;
        let j = 0;
        while (i < this.x_line) {
            this.in_array.push([]); // 빈 배열에 다시 담고.
            while (j < this.y_line) { //그 값을 만들어진 배열에 cell_id로 지정해서 다시 담아줌.
                this.array_string += '<input id=' + this.cell_id + i + j + ' class="input_cell" ' + ' type="number" ' + 'value=' + Number(this.in_array[i][j]) + '>';
                j++;
            }
            j = 0;
            i++;
        }
        return this.print_cell(this.x_line, this.y_line); //그리고 배열을 화면에 출력하는 함수로 넘어감. 
    }

    this.print_cell = function (arg1, arg2) { // 화면에 출력하는 함수. 
        this.box_id.style.width = (40 * arg1) + "px";
        this.box_id.style.height = (40 * arg2) + "px";
        this.box_id.style.marginLeft = (-20 * arg1) + "px";
        this.box_id.style.marginTop = (-24 * arg2) + "px";
        this.box_id.innerHTML = this.array_string;
    }

    this.rename_id = function () { // 만들어진 행렬들에게 다시 id값을 부여해줌. 후에 행렬의 셀들이 서로 연산을 함. 
        this.in_array = [];
        let i = 0;
        let j = 0;
        while (i < this.x_line) {
            this.in_array.push([]); // 빈 행렬을 만듬
            while (j < this.y_line) {
                this.in_array[i][j] = Number(document.getElementById(this.cell_id + i + j).value); // 여기에서 cell_one(matrix_1), cell_two(matrix_2)의 셀들을 다시 이름 붙여줌.
                j++;
            }
            j = 0;
            i++;
        }
        return this.in_array; // 그 각각의 id 값을 가진 셀들이 출력.
    }
    this.cal_mix = function (matrix_1, matrix_2, cal_method) {
        this.in_array = [];
        if (matrix_1.length == matrix_2.length && matrix_1[0].length == matrix_2[0].length) { // matrix_1, matrix_2의 행과 열의 값이 같아야 함. 
            let i = 0;
            let j = 0;
            while (i < matrix_1.length) {
                this.in_array.push([]); // 다시 빈 배열을 넣어주고
                while (j < matrix_1[0].length) {
                    switch (cal_method) {
                        case "plus":
                            this.in_array[i][j] = Number(matrix_1[i][j]) + Number(matrix_2[i][j]); // rename_id()에서 부여된 개별 셀들을 더해서, in_array에 다시 넣어줌
                            break;
                        case "minus":
                            this.in_array[i][j] = Number(matrix_1[i][j]) - Number(matrix_2[i][j]);
                            break;
                    }
                    this.array_string += '<div class="input_cell">' + this.in_array[i][j] + '</div>'; //계산된 셀들을 빈 문자열에 다시 넣어줌. 
                    j++;
                }
                j = 0;
                i++;
            }

            return this.print_cell(matrix_1[0].length, matrix_1.length);
        } else {
            alert("행과 열의 갯수가 같아야 합니다~!!"); //첫번쨰 행렬의 열과 두번쨰 행렬의 행의 숫자가 다를 때
        }
    }
    this.mix_multi = function (matrix_1, matrix_2) { //rename_id로 만들어지 행렬 2개의 각 셀들을 곱셈으로 연산함.
        if (matrix_1.length == matrix_2[0].length) {
            let i = 0;
            let j = 0;
            let k = 0;
            while (i < matrix_1.length) { // 여기에서 값이 0인 행렬을 미리 만들어둠. 안 만들시에 NaN 오류가 뜸.
                this.in_array.push([]);
                while (k < matrix_2[0].length) {
                    this.in_array[i][k] = 0;
                    k++;
                }
                k = 0;
                i++;
            }
            i = 0;

            while (i < matrix_1.length) {
                while (j < matrix_1[0].length) {
                    while (k < matrix_2[0].length) {
                        this.in_array[i][k] += Number(matrix_1[i][j]) * Number(matrix_2[j][k]); // 미리 만들어진 값인 0의 행렬에 곱한 값을 누적으로 더해줌.
                        k++;
                    }
                    k = 0;
                    j++;
                }
                j = 0;
                i++;
            }
            i = 0;

            while (i < matrix_1.length) {
                while (k < matrix_2[0].length) {
                    this.array_string += '<div class="input_cell">' + this.make_comma(this.in_array[i][k]) + '</div>'; // 만들어진 값들을 make_comma()메소드를 실행한 다음 그 값을 출력함.
                    k++;
                }
                k = 0;
                i += 1;
            }

            return this.print_cell(matrix_1.length, matrix_2[0].length);
        } else {
            alert("첫번쨰 행렬 열, 두번째 행렬 행의 수가 같아야 합니다.");
        }
    }
    this.make_comma = function (arg) { //행렬의 각각 id 값을 받아서, 세자리 콤마형태로 만드는 함수. 
        let myNR = [];
        let myF = 1;
        let resultString = "";
        var myN = String(arg); //받은 셀의 문자를 문자화함.(유사배열)
        let i = myN.length - 1;
        let j = 0;
        while (i >= 0) {
            myNR.unshift(myN[i]); // 배열의 마지막 값부터 앞쪽에서 뒤로 밀어냄.
            if (myF % 3 == 0 && i !== 0) {
                myNR.unshift(","); // 뒤에서부터 myF3일 떄는 콤마를 찍어줌.
            }
            myF++;
            i--;
        }
        while (j < myNR.length) {
            resultString += myNR[j]; //myNR의 만들어진 배열을 빈 문자열에 넣고
            j++
        }
        return resultString; // 그 값을 다시 출력해줌.
    }
}

this.addEventListener('click', function (e) {
    let xX = parseInt(document.getElementById("xX").value); //Matrix1 X축
    let xY = parseInt(document.getElementById("xY").value); //Matrix1 Y축
    let xX1 = parseInt(document.getElementById("xX1").value); //Matrix2 의 X축
    let xY1 = parseInt(document.getElementById("xY1").value); //Matrix2 의 Y축
    let displayArea = document.getElementById("displayArea"); //Matrix1 의 출력하는 구역
    let displayArea1 = document.getElementById("displayArea1"); //Matrix2 의 출력하는 구역
    let get_matrix1 = new make_matrix("cell_one", xX, xY, displayArea);
    let get_matrix2 = new make_matrix("cell_two", xX1, xY1, displayArea1);
    let mix_calculate = new make_matrix("cell_one", xX1, xY1, displayArea2);
    switch (e.target.id) {
        case 'just_make1':
            get_matrix1.zero_value(); // 0인 값인 배열을 만듬.
            get_matrix1.make_cell(); // 값을 셀을 만드는 함수 → print_cell로 가서 화면에서 출력함. 
            break;
        case 'just_make2':
            get_matrix2.zero_value();
            get_matrix2.make_cell();
            break;
        case 'random_input1':
            get_matrix1.make_value(); // 랜던 값을 만드는 배열
            get_matrix1.make_cell(); // 값을 셀을 만드는 함수 → print_cell로 가서 화면에서 출력함. 
            break;
        case 'random_input2':
            get_matrix2.make_value();
            get_matrix2.make_cell();
            break;
        case "reset_value1":
            get_matrix1.reset_value();
            break;
        case "reset_value2":
            get_matrix2.reset_value();
            break;
        case "all_reset":
            get_matrix1.reset_value();
            get_matrix2.reset_value();
            mix_calculate.reset_value();
            break;
        case "plus_button": // 만들어진 2개의 행렬들에게(rename_id)로 다시 셀을 부여해주고, plus로 연산하게 함.
            mix_calculate.cal_mix(get_matrix1.rename_id(), get_matrix2.rename_id(), "plus");
            break;
        case "minus_button": // 만들어진 2개의 행렬들에게(rename_id)로 다시 셀을 부여해주고, minus로 연산하게 함.
            mix_calculate.cal_mix(get_matrix1.rename_id(), get_matrix2.rename_id(), "minus");
            break;
        case "multi_button": // mix_multi라는 메소드를 이용하여 rename_id로 셀을 재부여하고, 값인 0인 행렬에 곱셈이 된&콤마화된 값을 출력함. 
            mix_calculate.mix_multi(get_matrix1.rename_id(), get_matrix2.rename_id());
            break;
    }
});
