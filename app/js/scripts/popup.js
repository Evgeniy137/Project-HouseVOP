$(document).ready(function(){
    $('.popup-link').magnificPopup({
        type:'inline',
        closeBtnInside:'true',
        enablescapekey:'true',
        callbacks: {
            open: function(){
                $('.slider').slick();
            }
        }
    });
})

