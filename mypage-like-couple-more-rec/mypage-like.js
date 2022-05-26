$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('on');
        $('.cont_recommend').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    })
})