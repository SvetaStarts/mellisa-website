(function($) {
    "use strict";

    // Кнопка "наверх"

    let btn = $('.scroll-to-top');

    $(window).scroll(function(){
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Меню-гамбургер

    $('.menu-toggle').click(function(e){
        e.preventDefault();
        $('.menu').toggleClass('show');
    })

    if ($(window).width < 768) {
        $('#link-menu').click(function(e) {
            e.preventDefault();
            $('.menu').toggleClass('show');
        });
    };

    // Popup-окно

    // 3D-эффекты

})(jQuery);


