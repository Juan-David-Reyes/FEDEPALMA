$(document).ready(function(){

    // AJUSTE FOOTER CON SECCIONES

    const fixFooterContacto = $('main section').hasClass('s_contacto');
    const fixFooterSagrilaft = $('main section').hasClass('s_instructivos');
    const fixFooterEquipoTrabajo = $('main section').hasClass('s_equipo_trabajo');


    if(fixFooterContacto + fixFooterSagrilaft + fixFooterEquipoTrabajo){
        $('footer').css('margin-top', '-50px');
    }else{
        $('footer').css('margin-top', '0px');
    }
    

    // click change class

    $('.scroll_h_fechas a').click(function(){
        $('.scroll_h_fechas a').removeClass('active_costos');
        $(this).toggleClass('active_costos')
    });

    // ---------------------

    // DRAG FECHAS

    const ele = document.getElementsByClassName('scroll_h_fechas');
    ele.scrollTop = 100;
    ele.scrollLeft = 150;

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

    $('main').click(function(){
        if($('.atajos_side').hasClass('active')){
            $('.atajos_side').removeClass('active');
        }
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

    /*   AGREGA CLASE ACTIVE A TABS - INTERNA SOSTENIBILIDAD ECONOMICA */
    
    $('.tab_item_btn').click(function(){
        $('.tab_item_btn').removeClass('active');
        $(this).toggleClass('active');
    }); 

    homeHeroSlider();
    homeSliderServiciosG();
    swiperNoticiasDest();
    homeSliderPalmicultores();
    palmicultoresSlider();
    sagrilaftSlider();
    swiperPubliUltimas();
    swiperNewPubli();
});

/* TOGGLE INTERNA INTERNAS FONDOS  - MENU LISTA DOCUMENTOS */

$('.btn_lista_doc').click(function(){
    $('.dropdown_list_doc').slideToggle();
    $('.fas.fa-chevron-down').toggleClass('fa-chevron-up');
}); 

/* ******** */

function homeHeroSlider(){
    let swiper = new Swiper(".swiperHero", {
        parallax: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            clickable: true,
            el: ".swiperHero .swiper-pagination",
        },
    });
}

function palmicultoresSlider(){
    let swiper = new Swiper(".cont_sistemas .swiperSagrilaft", {
        slidesPerView: 1,
        spaceBetween:0,
        pagination: {
            clickable: true,
            el: ".cont_sistemas .swiper-pagination",
        },
        breakpoints: {
            380: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            940: {
                slidesPerView: 4,
                spaceBetween: 40
            }
            
        }
    });
}

function sagrilaftSlider(){
    let swiper = new Swiper(".c_slider_plamicultores .swiperPalmicultor", {
        slidesPerView: 1,
        spaceBetween:10,
        pagination: {
            clickable: true,
            el: ".c_slider_plamicultores .swiper-pagination",
        },
        breakpoints: {
            380: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            940: {
                slidesPerView: 5,
                spaceBetween: 40
            }
            
        }
    });
}

function homeSliderServiciosG(){
    let swiper = new Swiper(".sliderServiciosG", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".sliderServiciosG .swiper-pagination",
        },
        navigation: {
            nextEl: '.slider_s_gremiales .swiper-button-next',
            prevEl: '.slider_s_gremiales .swiper-button-prev',
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

function swiperNoticiasDest(){
    let swiper = new Swiper(".swiperNoticias", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.cont_gen_noticias_d .swiper-button-next',
            prevEl: '.cont_gen_noticias_d .swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            380: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
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
            el: ".sliderPalmicultores .swiper-pagination",
        },
    });
}

/* SLIDER 1 INTERNA PUBLICACIONES */

function swiperNewPubli(){
    let swiper = new Swiper(".gran_c_slider_publ .swiperNewPublicacion", {
        slidesPerView: 1,
        spaceBetween: 80,
        pagination: {
            el: ".swiper-pagination",
          },
    });
}


/* SLIDER 2 INTERNA PUBLICACIONES */

function swiperPubliUltimas(){
    let swiper = new Swiper(".gran_c_publi_ultimas .swiperPubliUltimas", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.gran_c_publi_ultimas .swiper-button-next',
            prevEl: '.gran_c_publi_ultimas .swiper-button-prev',
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
              spaceBetween: 30
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
              spaceBetween: 100
            },
            940: {
                slidesPerView: 3,
                spaceBetween: 100
              }
            
        }
    });
}