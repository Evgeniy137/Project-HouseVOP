$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
});

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('black');
    }
    else
    {
        $('header').removeClass('black');
    }
})