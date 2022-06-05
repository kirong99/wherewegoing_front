var search = document.getElementById("search")
var item = document.getElementById("item")
var infowindow = new kakao.maps.InfoWindow({zindex:1});

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.402249,126.922267),
    level: 10
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
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
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
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
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
    if(value=="manan"){
        var container = document.getElementById('map');
        var options = {
        center: new kakao.maps.LatLng(37.3936,126.9218),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);

    } else if(value=="dongan"){
        var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.3897,126.9676),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);

    marker.setMap(map);
    }
    
}

lat1 = 37.3990637;
lat2 = 37.4016455;
lon1 = 126.9218802;
lon2 = 126.9229027;


var dist = Math.sqrt(Math.pow((0-3),2) + Math.pow((4-0),2));
console.log(dist);

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

var dd = getDistance(lat1,lon1,lat2,lon2);
console.log(dd +"m");

var paik_dist = document.getElementById("distance");
paik_dist.innerHTML = dd+"m";







