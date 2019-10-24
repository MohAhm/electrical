$('#toggle').click(function () {
    $(this).next('.nav').toggleClass("is-collapsed-mobile");
});

$('.sponsors .slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

    responsive: [{
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]

});