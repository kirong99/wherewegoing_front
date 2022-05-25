$(document).ready( function() {
    $(".course-select-box h3").click(function(){ //도시별
        $(".course-select-box h3, .course-select-box .check, .course-select-box ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("div").addClass("on");
        $(".on").next("ul").addClass("on");
    });
    $(".theme .theme_list>div").click(function(){ //테마별
        $(".theme .theme_list>div, .theme .theme_list ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    $(".review_all .review").click(function(){ //모달(후기)
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
    $(".box .save").click(function(){ //좋아요
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        } else{
            $(this).addClass("on");
        }
    });
    $(".comment .save").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        } else{
            $(this).addClass("on");
        }
    });
    $(".popup").click(function(e){ //모달(커플 관리)
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

    // document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10); //?
});





