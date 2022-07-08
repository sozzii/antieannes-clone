
$(function () {
    $(".slick-slider").slick({
        //visual slide
        dots: true,
        // vertical: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        // visual slide 자동슬라이드
        autoplay: true, 
        autoplaySpeed: 4000,
    });

    //section1 slide
    $('.slide-wrap').slick({
        dots: true,
        // vertical: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
