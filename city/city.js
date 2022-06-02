const today = new Date(); //현재 시간
const m_today = moment();

const check_start_time = moment('08:00','HH:mm');
const check_end_time = moment('01:00', 'HH:mm');
check_end_time.add(1,'d');

// omitting the optional third parameter, 'units'
const result = m_today.isBetween(check_start_time, check_end_time); 
console.log(result)

const m_hours = m_today.fomat("HH");
const hours = ('0' + today.getHours()).slice(-2);
const minutes = ('0' + today.getMinutes()).slice(-2);
const timeString = hours + ':' + minutes;

const time = document.getElementsByClassName("time"); //영업 시간 불러오기
const sp = time[2].innerHTML; //영업시간
console.log(sp);
const [start , end] = sp.split('~'); //영업 시작 시간, 영업 종료 시간

const go = '영업 중';
const finish = '영업 종료';
let endResult = parseInt(end);
let startResult = parseInt(start);
let pre = parseInt(timeString);
const tw = 24;
const ze = 0;
const si = 6;
const no = document.getElementById('none');
const place = document.getElementsByClassName("state"); //체크박스 불러오기
const state = place[2].innerHTML;//영업중 or 영업종료

if(ze <= endResult &&  endResult < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult = parseInt(end) + tw; //영업 종료 시간에 24를 더해준다
}else{
    console.log("아니다")
}

if(startResult <= pre && pre < endResult){ //현재 시간이 영업시작 시간과 영업 종료 시간 사이에 있다면
    if(endResult >= 25){
        pre = parseInt(timeString) + parseInt(end);
    }
    place[2].innerHTML = go; //시간 안에 속해 있다면 영업 중
    console.log(startResult);
    console.log(pre);
    console.log(endResult);
} else{
    place[2].innerHTML = finish; //아니라면 영업 종료
    document.querySelector('#find').id = 'none'; //find라는 id를 가진 객체를 찾고 id를 none으로 변경
}



endResult = parseInt(end) + tw;
console.log(endResult);


$('#open').click(function(){
    let check = $('#open').prop('checked');

    if(check){
        if(no){
            no.style.display = "none";
        }
    }else {
        no.style.display = "block";
    }
})





