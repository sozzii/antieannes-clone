// 스크롤 시 top버튼 해당 높이에서 opacity로 나타나기, 없어지기
function topscroll() {
    let scrollTop;

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        if (370 < scrollTop) {
            $('.sec1 .top').addClass('active');
        } else {
            $('.sec1 .top').removeClass('active');
        }
    });
}

$(window).on('load', topscroll);

//top 버튼 클릭 > top으로 올라가기
$('.sec1 .top').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});


// 버거메뉴 클릭 add, remove
$('.burger').on('click', function () {
    $('.burger').addClass('active');
    $('.head').addClass('active');
    $('.burger_menu').addClass('active');

    $('.burger').on('click', function () {
        $('.burger').removeClass('active');
        $('.burger_menu').removeClass('active');
    });
});


//버거메뉴 a태그 클릭 color add
const burgerMenu_color = document.querySelectorAll('.burger_menu .bmenu a');

burgerMenu_color[0].addEventListener('click',function(){
    $('.bmenu a').addClass('active');
});


//slide, autoslide > slide.js(auntie anne's)


//setion1 menu click > circle-img-background-active
$('article .sec1_box').on('click', function () {
    $('article .sec1_box::before').addClass('active');
});

$('article .sec1_box').on('click', function () {
    $('article .sec1_box2::before').addClass('active');
});



