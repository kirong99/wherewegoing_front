var today = new Date(); //현재 시간

var hours = ('0' + today.getHours()).slice(-2);
var minutes = ('0' + today.getMinutes()).slice(-2);

var timeString = hours + ':' + minutes;

var time = document.getElementById("time");

const sp = time.innerHTML; //영업시간
const [start , end] = sp.split('~');
console.log(start);

var place = document.getElementById("state");
const state = place.innerHTML;//영업중 or 영업종료
const replace = state.replaceAll('영업 중','영업 종료');

if(start <= timeString < end){
    console.log(state);
} else{
    place.innerHTML = '<p>영업 종료</p>'
}

var time1 = document.getElementById("time1");

const sp1 = time.innerHTML; //영업시간 문자열로
const [start1 , end1] = sp.split('~');
console.log(start1);

var place1 = document.getElementById("state1");
const state1 = place.innerHTML;//영업중 or 영업종료
const replace1 = state.replaceAll('영업 중','영업 종료');

if(start1 <= timeString < end1){
    console.log(state1);
} else{
    place1.innerHTML = '<p>영업 종료</p>'
}



