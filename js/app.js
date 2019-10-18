$('#toggle').click(function () {
    $(this).next('.nav').toggleClass("is-collapsed-mobile");
});


$(window).scroll(function () {

    if ($(window).width() > 768) {
        if ($(window).scrollTop() >= 100) {
            $('.main-header').css('padding', '5px 0');
            $('.main-header').css('background-color', 'white');
            $('.main-header').css('box-shadow', '0 1px 4px rgba(0, 0, 0, .4)');
            $('.logo-title').css('color', '#1C1C1C');
            $('.nav__link a').css('color', '#1C1C1C');
            $('.nav__link--current a').css('color', '#1C1C1C');
            $('.nav__link--current a').css('border-bottom-color', '#1C1C1C');
        } else {
            $('.main-header').css('padding', '20px 0');
            $('.main-header').css('background-color', 'rgba(0, 0, 0, 0.4)');
            $('.main-header').css('box-shadow', 'none');
            $('.logo-title').css('color', 'white');
            $('.nav__link a').css('color', 'white');
            $('.nav__link--current a').css('color', 'white');
            $('.nav__link--current a').css('border-bottom-color', 'white');
        }
    }

});