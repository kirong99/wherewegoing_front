$(document).ready(function(){
    $(".course-select-box h3").click(function(){
        $(".course-select-box h3, .course-select-box ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

});