$(document).ready(function(){

    $('.nav_btn').click(function(){
        $('.black_screen').fadeIn();
        $('.nav_main').addClass('active');
        $('body').css('overflow', 'hidden');
    })

    $('.close_btn').click(function(){
        $('.black_screen').fadeOut();
        $('.nav_main').removeClass('active');
        $('body').css('overflow', 'scroll');
    })

    $('.black_screen').click(function(){
        $('.black_screen').fadeOut();
        $('.nav_main').removeClass('active');
        $('body').css('overflow', 'scroll');
    })


    homeHeroSlider();

})

function homeHeroSlider(){
    let swiper = new Swiper(".swiperHero", {
        pagination: {
          el: ".swiper-pagination",
        },
    });
}

