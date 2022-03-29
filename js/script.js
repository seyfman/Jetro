$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        autoplay: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
    });

    $('.blog-slider-for').slick({

    });

    $('.burger').click(function() {
        $('.burger').toggleClass('burger-activ')
        $('.nav').toggleClass('nav-activ')
        $('body').toggleClass('body-activ')
    });

    $('.portfolio-nav-link').click(function() {
        $('.portfolio-nav-link').removeClass('portfolio-nav-link-activ')
        $($(this)).addClass('portfolio-nav-link-activ')

    });



})