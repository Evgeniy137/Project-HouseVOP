$(document).ready(function(){
    $('.popup-link').magnificPopup({
        type:'inline',
        enablescapekey:'true',
        removalDelay: 300,
        callbacks: {
            open: function(){
                $('.slider').slick();
            }
        }
    });
})

