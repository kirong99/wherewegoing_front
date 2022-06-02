const today = new Date(); //현재 시간
const hours = ('0' + today.getHours()).slice(-2);
const minutes = ('0' + today.getMinutes()).slice(-2);
const timeString = hours + ':' + minutes;

const time = document.getElementsByClassName("time"); //영업 시간 불러오기
const sp = time[0].innerHTML; //영업시간
const sp1 = time[1].innerHTML;
const sp2 = time[2].innerHTML;
const sp3 = time[3].innerHTML;
const [start , end] = sp.split('~'); //영업 시작 시간, 영업 종료 시간
const [start1 , end1] = sp1.split('~');
const [start2 , end2] = sp2.split('~');
const [start3 , end3] = sp3.split('~');

const go = '영업 중';
const finish = '영업 종료';
let endResult = parseInt(end);
let endResult1 = parseInt(end1);
let endResult2 = parseInt(end2);
let endResult3 = parseInt(end3);
let startResult = parseInt(start);
let pre = parseInt(timeString);
const tw = 24;
const ze = 0;
const si = 6;
const place = document.getElementsByClassName("state"); //체크박스 불러오기

if(pre == 0){
    pre = pre+tw;
}

if(ze <= endResult &&  endResult < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult = parseInt(end) + tw; //영업 종료 시간에 24를 더해준다
}else{
    console.log("아니다")
}

if(ze <= endResult1 &&  endResult1 < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult1 = parseInt(end1) + tw; //영업 종료 시간에 24를 더해준다
}else{
    console.log("아니다")
}

if(ze <= endResult2 &&  endResult2 < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult2 = parseInt(end2) + tw; //영업 종료 시간에 24를 더해준다
}else{
    console.log("아니다")
}

if(ze <= endResult3 &&  endResult3 < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult3 = parseInt(end3) + tw; //영업 종료 시간에 24를 더해준다
}else{
    console.log("아니다")
}

if(startResult <= pre && pre < endResult){ //현재 시간이 영업시작 시간과 영업 종료 시간 사이에 있다면
    if(endResult >= 25){
        pre = parseInt(timeString) + parseInt(end);
    }
    place[0].innerHTML = go; //시간 안에 속해 있다면 영업 중
} else{
    place[0].innerHTML = finish; //아니라면 영업 종료
}

if(startResult <= pre && pre < endResult1){ //현재 시간이 영업시작 시간과 영업 종료 시간 사이에 있다면
    if(endResult1 >= 25){
        pre = parseInt(timeString) + parseInt(end1);
    }
    place[1].innerHTML = go; //시간 안에 속해 있다면 영업 중
} else{
    place[1].innerHTML = finish; //아니라면 영업 종료
}

if(startResult <= pre && pre < endResult2){ //현재 시간이 영업시작 시간과 영업 종료 시간 사이에 있다면
    if(endResult2 >= 25){
        pre = parseInt(timeString) + parseInt(end2);
    }
    place[2].innerHTML = go; //시간 안에 속해 있다면 영업 중
} else{
    place[2].innerHTML = finish; //아니라면 영업 종료
}

if(startResult <= pre && pre < endResult3){ //현재 시간이 영업시작 시간과 영업 종료 시간 사이에 있다면
    if(endResult3 >= 25){
        pre = parseInt(timeString) + parseInt(end3);
    }
    place[3].innerHTML = go; //시간 안에 속해 있다면 영업 중
} else{
    place[3].innerHTML = finish; //아니라면 영업 종료
}






