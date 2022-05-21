document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: 600,
        contentHeight: 600,
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        nowIndicator: true,
        locale: 'ko',
        eventAdd: function (obj) {
            console.log(obj);
        },
        eventChange: function (obj) {
            console.log(obj);
        },
        eventRemove: function (obj) {
            console.log(obj);
        },
    })
    const calData = {
        calendar,
        events: [
            {
                title: 'event1',
                start: '2022-05-02'
            },
            {
                title: 'event2',
                start: '2022-05-07',
                end: '2022-05-08'
            },
            {
                title: 'event3',
                start: '2022-05-23'
            }
        ]
    }
    calData.calendar.render();
    calData.events.forEach(function(Element){
        console.log(Element)
    })
});



$(document).ready(function(){
    $(".course-select-box h3").click(function(){
        $(".course-select-box h3, .course-select-box .check, .course-select-box ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("div").addClass("on");
        $(".on").next("ul").addClass("on");
    });
    $(".theme .theme_list>div").click(function(){
        $(".theme .theme_list>div, .theme .theme_list ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    $(".review_all .review").click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });

    $(".popup").click(function(e){
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

    document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);

    $(".theme .theme_list>div").click(function(){
        $(".theme .theme_list>div, .theme .theme_list ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

});

const slides = document.querySelector('.slides');
const slideImg = document.querySelectorAll('slides li');
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 500;
const slideMargin = 100;

slides.getElementsByClassName.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num){
    slides.style.left = -num * 400 + 'px';
    currentIdx = num;
}

prev.addEventListener('click',function(){
    if(currentIdx !== 0) moveSlide(currentIdx - 1);
});
next.addEventListener('click',function(){
    if(currentIdx !== slideCount - 1){
        moveSlide(currentIdx + 1);
    }
})




