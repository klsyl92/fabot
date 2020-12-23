$(function(){
    //top 클릭하면 위로 가는 애니메이션
    $('.top').click(function(){
        $('html').animate({scrollTop:0}, 500);
    });
    
    //scroll하면 .hd를 추가
    $('.top').hide();
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 200){
            $('header').addClass('hd');
            $('.top').fadeIn();
           }else{
            $('header').removeClass('hd');
            $('.top').fadeOut();
           }
    });  
});