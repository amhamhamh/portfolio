"use strict";

var _this = void 0;

display_number = function display_number(print_number) {
  var like_log_cc = document.getElementById("like_log_cc");
  var ctx = like_log_cc.getContext("2d");
  ctx.font = "100px D2Coding";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.clearRect(0, 0, like_log_cc.width, like_log_cc.height);
  ctx.fillText(print_number, like_log_cc.width / 2, like_log_cc.height / 1.3);
};

generate_number = function generate_number() {
  var magic_number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  display_number(magic_number);
  return magic_number;
};

(main = function main() {
  var random_number = generate_number();
  $("#like_log_ref").on("click", function () {
    random_number = generate_number();
  });
  $(_this).on("keyup", function (e) {
    switch (e.target.id) {
      case "like_log_id":
        !/^[0-9a-zA-Z]*$/.test($("#" + e.target.id).val()) && $("#" + e.target.id).val($("#" + e.target.id).val().substring(0, $("#" + e.target.id).val().length - 1)) && alert("영문 대문자,소문자 10자 이내로 입력하세요");
        break;

      case "like_log_pw":
        !/^[0-9a-zA-Z@!#]*$/.test($("#" + e.target.id).val()) && $("#" + e.target.id).val($("#" + e.target.id).val().substring(0, $("#" + e.target.id).val().length - 1)) && alert("영문 대문자,소문자 10자 이내로 입력하세요");
        break;
    }
  });
  $("#like_log_log").on("click", function (e) {
    random_number == $("#like_log_in").val() || alert("일련번호가 일치하지 않습니다.") || e.preventDefault() || $("#like_log_in").val("").focus().css("background-color", "rgba(247, 231, 125, 0.75)");
  });
})();