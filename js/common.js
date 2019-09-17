$(function() {

    new WOW().init();

    $('.slider-for').slick({

        asNavFor: '.slider-nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true


    });
    $('.slider-nav').slick({

        asNavFor: '.slider-for',
        slidesToShow: 2,
        slidesToScroll: 1,

        dots: false,
        infinite: true,

        variableWidth: true


    });
    $('.sliders__list').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1378,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 1089,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 662,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true

                }
            },

        ]

    });

    $('.certificated__list').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1378,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 1089,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true

                }
            }

        ]
    });




});
