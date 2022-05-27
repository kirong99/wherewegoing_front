const user = [
    {
        id : 'hi1234',
        nickname : 'hi1234',
        email : 'hi1234@naver.com'
    },
    {
        id : 'hg1234',
        nickname : 'hg1234',
        email : 'hg1234@naver.com'
    },
    {
        id : 'sadsafsad',
        nickname : 'hz1234',
        email : 'giryowodfssadsd@naver.com'
    }
]

const list = document.getElementById('list_d');

function showList(val='') {
    list.innerHTML = '';
    const res = user.forEach(user => {
        if(user.id.includes(val)){
            const li = document.createElement('li');
            li.innerHTML = `
                <p>아이디 : <span>${user.id}</span>닉네임 : <span>${user.nickname}</span></p>
                <p>이메일 : <span>${user.email}</span></p>
            `
            list.appendChild(li);
        }
    });
}

showList();

const searchInput = document.getElementById('search');

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    console.log(val);
    showList(val);
});



$(document).ready( function() {

$(".popup").click(function(e){ //모달(커플 관리)
    e.preventDefault();
    // $(".layer").css("display","block");
    $(".layer").show();
    $(".layer-bg").show();
    
});
$(".layer .close").click(function(e){
    // $(".layer").css("display","none");
    $(".layer").hide();
    $(".layer-bg").hide();
});
});