import $ from 'jquery';
import WOW from 'wow.js';

$(document).ready(function () {
    $('ul.nav li.dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
        }
    );
    // Slick slider initialization
    $('.slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slide: 'div',
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });

    // Latest post slider
    $('.latest_postnav').newsTicker({
        row_height: 64,
        speed: 800,
        prevButton: $('#prev-button'),
        nextButton: $('#next-button')
    });

    // Fancybox buttons
    $(".fancybox-buttons").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

    // Show/hide scrollToTop button based on scroll position
    $(window).scroll(function () {
        const scrollToTopButton = $('.scrollToTop');
        if ($(this).scrollTop() > 300) {
            scrollToTopButton.fadeIn();
        } else {
            scrollToTopButton.fadeOut();
        }
    });

    // Scroll to top button click event
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Tooltip
    $('.tootlip').tooltip();
    $("ul#ticker01").liScroll();
});

const wow = new WOW({
    animateClass: 'animated',
    offset: 100,
});
wow.init();

document.addEventListener("DOMContentLoaded", function () {
    $('#status').fadeOut();
    $('#preloader').delay(100).fadeOut('slow');
    $('body').delay(100).css({
        'overflow': 'visible'
    });
});