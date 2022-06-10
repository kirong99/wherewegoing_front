const today = new Date(); //현재 시간
const hours = ('0' + today.getHours()).slice(-2);
const minutes = ('0' + today.getMinutes()).slice(-2);
const timeString = hours + ':' + minutes;

const time = document.getElementsByClassName("time"); //영업 시간 불러오기
const sp1 = time[0].innerHTML; //영업시간
const sp2 = time[1].innerHTML;
const sp3 = time[2].innerHTML;
const sp4 = time[3].innerHTML;
const [start , end] = sp1.split('~'); //영업 시작 시간, 영업 종료 시간
const [start1 , end1] = sp2.split('~');
const [start2 , end2] = sp3.split('~');
const [start3 , end3] = sp4.split('~');



const go = '영업 중';
const finish = '영업 종료';
let endResult = parseInt(end);
let endResult1 = parseInt(end1);
let endResult2 = parseInt(end2);
let endResult3 = parseInt(end3);
let startResult = parseInt(start);
let pre = parseInt(timeString);
const tw = 23;
const ze = 0;
const si = 6;
const place = document.getElementsByClassName("state"); //체크박스 불러오기

if(pre == 0){
    pre = pre+tw;
}

if(ze <= endResult &&  endResult < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult = parseInt(end) + tw; //영업 종료 시간에 23를 더해준다
}else{
    console.log("아니다")
}

if(ze <= endResult1 &&  endResult1 < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult1 = parseInt(end1) + tw; //영업 종료 시간에 23를 더해준다
}else{
    console.log("아니다")
}

if(ze <= endResult2 &&  endResult2 < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult2 = parseInt(end2) + tw; //영업 종료 시간에 23를 더해준다
}else{
    console.log("아니다")
}

if(ze <= endResult3 &&  endResult3 < si){ //영업 종료 시간이 00시거나 크고 06시보다 작은 경우
    endResult3 = parseInt(end3) + tw; //영업 종료 시간에 23를 더해준다
}else{
    console.log("아니다")
}

const every = '매일';

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

if(start3 == every){
    place[3].innerHTML = go;
}

var selectTab = document.getElementById("select");

var con = document.getElementsByClassName("course-select-box");

selectTab.addEventListener("change",function(){
    var val = selectTab.options[selectTab.selectedIndex].value;
    for(var i = 0; i<selectTab.length-1;i++){
        if(val == i){
            con[i].style.display = "block";
        } else if( val == "choice"){
            con[0].style.display = "block";
            document.getElementById("tab-1").selected = true;
        }else if(val == "0"){
            con[1].style.display = "none";
            con[0].style.display = "block";
        }
         else if( val == "1"){
            con[0].style.display = "none";
            con[1].style.display = "block";
        }
    }
    
})






