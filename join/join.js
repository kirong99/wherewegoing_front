var clicked_id = 0;
var clicked_nick = 0;
document.querySelector("#check_id").addEventListener("click", () => {
    const id = "admin";
    clicked_id++;

    if (id == document.querySelector("#id").value) {
        alert("중복된 아이디입니다.");
        if(document.querySelector(".join_bt").addEventListener("click", () => {
            alert("아이디를 확인하세요.");
        } 
        ));
    } else if(id!=document.querySelector("#id").value){
        alert("사용가능한 아이디입니다.");
    }
});

document.querySelector("#check_nick").addEventListener("click", ()=>{
    const nick = "admin";
    clicked_nick++;
    if (nick == document.querySelector("#nickname").value) {
        alert("중복된 닉네임입니다.");
    } else if(nick != document.querySelector("#nickname").value){
        alert("사용가능한 닉네임입니다.");
    }
});

$(document).ready(function(){
    $('.join_bt').click(function(){
        return join_check();
    })
});

join_check = function() {
    var id = document.getElementById("id");
    var password = document.getElementById("password");
    var password_check = document.getElementById("password_check");
    var nickname = document.getElementById("nickname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var phone_check = document.getElementById("phone_check");

    if(id.value == ""){
        alert("아이디를 입력하세요.");
        id.focus();
        return false;
    }

    if(clicked_id <= 0){
        alert("아이디 중복확인이 필요합니다.");
        return false;
    }

    if(password.value == ""){
        alert("비밀번호를 입력하세요.");
        password.focus();
        return false;
    }

    var pwd_check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    if(!pwd_check.test(password.value)){
        alert("비밀번호는 영문자,숫자 조합으로 6~20자리 사용해야 합니다.");
        password.focus();
        return false;
    }

    if(password_check.value != password.value){
        alert("비밀번호가 일치하지 않습니다.");
        password_check.focus();
        return false;
    }

    if(nickname.value == ""){
        alert("닉네임을 입력하세요.");
        nickname.focus();
        return false;
    }
    if(clicked_nick <= 0){
        alert("닉네임 중복확인이 필요합니다.");
        return false;
    }

    var email_check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(email.value == ""){
        alert("이메일을 입력하세요.");
        email.focus();
        return false;
    }

    if(!email_check.test(email.value)){
        alert("이메일 형식이 올바르지 않습니다.");
        email.focus();
        return false;
    }

    if(phone.value == ""){
        alert("핸드폰 번호를 입력하세요.");
        phone.focus();
        return false;
    }

    if(phone_check.value == ""){
        alert("인증번호를 입력하세요.");
        phone_check.focus();
        return false;
    }

    document.join.submit();
}