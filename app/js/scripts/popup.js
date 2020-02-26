$(document).ready(function(){
    $('.popup-link').magnificPopup({
        type:'inline',
        closeBtnInside:'true',
        enablescapekey:'true',
        removalDelay: 300,
        callbacks: {
            open: function(){
                $('.slider').slick();
            }
        }
    });
})

