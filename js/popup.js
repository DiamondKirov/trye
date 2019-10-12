$(document).ready(function () {
    $('.product__img').bind('click', function(){
        $('.popup').toggle();
    })

    $('.popup-close').bind('click', function(){
        $('.popup').toggle();
    })
});