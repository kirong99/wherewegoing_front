$(document).ready(function(){
    $('header nav .menu > li').on('click',function(e){

    }).mouseenter(function(e){
        var_this=$(this);
        _this.addClass('hover');
    }).mouseleave(function(e){
        var_this=$(this);
        _this.removeClass('hover');
    })
})