$(document).ready(function(){
    $(".course-select-box h3").click(function(){
        $(".course-select-box h3, .course-select-box ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
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
});