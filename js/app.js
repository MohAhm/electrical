$('#toggle').click(function () {
    $(this).next('.nav').toggleClass("is-collapsed-mobile");
});

const md = window.matchMedia("(max-width: 768px)");

function blackBg() {
    $('.main-header').css('padding', '20px 0');
    $('.main-header').css('background-color', 'rgba(0, 0, 0, 0.4)');
    $('.main-header').css('box-shadow', 'none');
    $('.logo-title').css('color', 'white');
    $('.nav__link a').css('color', 'white');
    $('.nav__link--current a').css('color', 'white');
}

function whiteBg() {
    $('.main-header').css('padding', '5px 0');
    $('.main-header').css('background-color', 'white');
    $('.main-header').css('box-shadow', '0 1px 4px rgba(0, 0, 0, .4)');
    $('.logo-title').css('color', '#1C1C1C');
    $('.nav__link a').css('color', '#1C1C1C');
    $('.nav__link--current a').css('color', '#1C1C1C');
}

function navbarBg(md) {
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 100) {
            whiteBg();
        } else {
            if (md.matches) {
                whiteBg();
            } else {
                blackBg();
            }
        }

    });

}

navbarBg(md);
md.addListener(navbarBg);