$(document).ready(function () {

    "use strict";

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function introHeight() {
        var wh = $(window).height();
        $('#intro').css({
            height: wh
        });
    }

    introHeight();
    $(window).bind('resize', function () {
        //Update slider height on resize
        introHeight();
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Parallax init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(function () {
            $('.captionWrapper.valign').css({
                top: '120px'
            });

            $('.parallaxLetter').css({
                display: 'none'
            });
        });
    } else {
        $(window).stellar({
            responsive: true,
            horizontalOffset: 0,
            horizontalScrolling: false
        });
    }
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* smoothscroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    smoothScroll.init({
        speed: 1000,
        offset: 70
    });
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Single Portfolio*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'light_square',
        slideshow: 3000,
        autoplay_slideshow: false
    });

    // Portfolio Gallery Slider
    $(".portfolio-slider").owlCarousel({
        stopOnHover: true,
        navigation: true,
        navigationText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
              ],
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        autoPlay: 8000,
        singleItem: true,
        transitionStyle: "fade",
        afterAction: afterAction
    });

    function afterAction() {
        $('.slider-nav').text("" + (this.owl.currentItem + 1) + "/" + this.owl.owlItems.length + "");
    };

});
