var search = document.getElementById("search")
var item = document.getElementById("item")
var infowindow = new kakao.maps.InfoWindow({zindex:1});

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.402249,126.922267),
    level: 2
};

var map = new kakao.maps.Map(container, options);

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

    marker.setMap(map);
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







