$(document).ready(function(){

    $('.nav_btn').click(function(){
        $('.black_screen').fadeIn();
        $('.nav_main').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.close_btn').click(function(){
        $('.black_screen').fadeOut();
        $('.nav_main').removeClass('active');
        $('body').css('overflow', 'scroll');
    });

    $('.black_screen').click(function(){
        $('.black_screen').fadeOut();
        $('.nav_main').removeClass('active');
        $('body').css('overflow', 'scroll');
    });

    $('.btn_atajo').click(function(){
        $('.atajos_side').toggleClass('active');
    });

    // FUNCIONAMIENTO DEL SLIDER

    $('.link_m_pri').click(function(){
        $('.link_m_pri').removeClass('active');
        $('.submenu a').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.submenu a').click(function(){
        $('.submenu a').removeClass('active');
        $(this).toggleClass('active');
    }); 

    homeHeroSlider();
    homeSliderServiciosG();
    homeSliderPalmicultores();

})

function homeHeroSlider(){
    let swiper = new Swiper(".swiperHero", {
        parallax: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },
    });
}

function homeSliderServiciosG(){
    let swiper = new Swiper(".sliderServiciosG", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            380: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            940: {
                slidesPerView: 3,
                spaceBetween: 10
              }
            
        }
    });
}

function homeSliderPalmicultores(){
    let swiper = new Swiper(".sliderPalmicultores", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
        },
    });
}
