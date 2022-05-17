const nlo = 0;
document.querySelector("#check_id").addEventListener("click", () => {
    const id = "admin";

    if (id == document.querySelector("#id").value) {
        alert("중복된 아이디입니다.");
        nlo = 1;
    } else if(id!=document.querySelector("#id").value){
        alert("사용가능한 아이디입니다.");
    } else {
        nlo = 0;
    }
});

document.querySelector("#check_nick").addEventListener("click", ()=>{
    const nick = "admin";
    if (nick == document.querySelector("#nick").value) {
        alert("중복된 닉네임입니다.");
        nlo = 1;
    } else if(nick != document.querySelector("#nick").value){
        alert("사용가능한 닉네임입니다.");
    } else{
        nlo = 0;
    }
});

document.querySelector(".join_bt").addEventListener("click", () => {
    if(nlo == 1){
        alert("아이디 또는 닉네임을 확인하세요.");
    }
})