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
        id : 'hz1234',
        nickname : 'hz1234',
        email : 'hz1234@naver.com'
    }
]

const list =document.getElementById('list_d');

function showList(val='') {
    list.innerHTML = '';
    const res = user.forEach(user => {
        if(user.id.includes(val)){
            const li = document.createElement('li');
            li.innerHTML = `
            <p>아이디 : ${user.id}<span>닉네임 : ${user.nickname}</span></p>
            `
            list.appendChild(li);
        }
    })
}

showList();

const searchInput = document.getElementById('value');

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    console.log(val);
})