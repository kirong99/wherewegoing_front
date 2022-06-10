var search = document.getElementById("search")
var item = document.getElementById("item")
var infowindow = new kakao.maps.InfoWindow({zindex:1});

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.402249,126.922267),
    level: 5
};

var map = new kakao.maps.Map(container, options);

//현위치 찍기 시작

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;text-align: center;">현 위치</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = '현 위치를 찾을 수 없습니다.'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    

//검색하기 시작
search.addEventListener("click",function(){
   
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch(item.value, placesSearchCB); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });
 // 인포윈도우에 표시할 내용
        iRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
        removable : iRemoveable
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>' + '<div class="mark">' + '<a href="https://map.kakao.com/link/to/안양역,37.3990637,126.9218802" target="_blank">' + '<button>'+ '길찾기' + '</button>' + '</a>' + '</div>');
        infowindow.open(map, marker);
    });
}
})

//마커 위치
var markerPosition = new kakao.maps.LatLng(37.402249,126.922267);

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

//동안구 만안구 선택 시작
var value;
function showValue(target) {
    value = target.value;
    if(value=="0"){
        var container = document.getElementById('map');
        var options = {
        center: new kakao.maps.LatLng(37.3936,126.9218),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);

    } else if(value=="1"){
        var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.3897,126.9676),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);

    marker.setMap(map);
    }
    
}

lat1 = 37.3990637;//안양역
lon1 = 126.9218802;//안양역

lat2 = 37.4016455;//빽다방
lon2 = 126.9229027;

lat3 = 37.3981249;
lon3 = 126.922610;

lat4 = 37.3997917;
lon4 = 126.922563;

lat5 = 37.3846898;
lon5 = 126.908860;

function getDistance(lat1, lon1, lat2, lon2){
    if((lat1 == lat2) && (lon1 == lon2)){
        return 0;
    }

    var radLat1 = Math.PI * lat1 / 180;
    var radLat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta / 180;
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if(dist > 1){
        dist = 1;
    }

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if(dist < 100) dist = Math.round(dist / 10) * 10;
    else dist = Math.round(dist / 100) * 100;

    return dist;
}
const on = document.getElementsByClassName("on");
const dist = document.getElementsByClassName("distance");
const name1 = document.getElementsByClassName("name");

const dist1 = getDistance(lat1,lon1,lat2,lon2);
dist[0].innerHTML = dist1 + "m";

const dist2 = getDistance(lat1,lon1,lat3,lon3);
dist[1].innerHTML = dist2 + "m";

const dist3 = getDistance(lat1,lon1,lat4,lon4);
dist[2].innerHTML = dist3 + "m";

const dist4 = getDistance(lat1,lon1,lat5,lon5);
dist[3].innerHTML = dist4 + "m";

console.log(dist);
