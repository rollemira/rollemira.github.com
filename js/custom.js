/*Priject    : Piple
 * Author  : Piple
 * 
 */
//transperent nav
// Sticky header style change on sroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('stuck');
    } else {
        $('header').removeClass('stuck');
    }
});



/*=========================*/
/*========on hover dropdown navigation====*/
/*==========================*/
$(document).ready(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});

/* ==============================================
 main flex slider
 =============================================== */
$(window).load(function() {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "slide",
        controlNav: false,
        direction: "vertical"
    });
});

/*=========================*/
/*========Animation on scroll with wow.js====*/
/*==========================*/

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true
});
wow.init();


/*=========================*/
/*========portfolio mix====*/
/*==========================*/
$('#grid').mixitup();

//
//
//
///* ==============================================
// Auto Close Responsive Navbar on Click
// =============================================== */
//
//function close_toggle() {
//    if ($(window).width() <= 768) {
//        $('.navbar-collapse a').on('click', function() {
//            $('.navbar-collapse').collapse('hide');
//        });
//    }
//    else {
//        $('.navbar .navbar-default a').off('click');
//    }
//}
//close_toggle();
//
//$(window).resize(close_toggle);


//popups//
$(document).ready(function() {
    $('.popup-img').magnificPopup({ type: 'image' });
});
/* ==============================================
 Smooth Scroll To Anchor
 =============================================== */

$(function() {
    $('.scrollto a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/************parallax*********************/
$(function() {
    $.stellar({
        horizontalScrolling: false
    });
});

//owl carousel for testimonials
$(document).ready(function() {

    $("#testi-carousel").owlCarousel({
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        autoPlay: 4000
    });

});
$(window).load(function() {
    $('.slide-post').flexslider({
        slideshowSpeed: 4000

    });
});


/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});

//video background
jQuery(function() {
    jQuery(".player").mb_YTPlayer();
});

/*=========================*/
/*========tooltip and popovers====*/
/*==========================*/
//$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();

$(window).load(function() {
    var offset = 400;
    var $backToTop = $('#back-to-top');
    $backToTop.addClass('animated');
    $(window).scroll(function() {
        if (this.scrollY >= offset) {
            $backToTop.removeClass('hidden');
            $backToTop.removeClass('fadeOut');
            $backToTop.addClass('fadeIn');
        } else {
            $backToTop.removeClass('fadeIn');
            $backToTop.addClass('fadeOut');
        }
    });

    $backToTop.click(function(e) {
        e.preventDefault();
        $('html, body').delay(100).animate({ scrollTop: 0 }, 500);
    });
});

$(document).ready(function() {
    var configProfile = {
        "profile": { "screenName": window.twitterName || 'mdo' },
        "domId": 'recentTweets',
        "maxTweets": 5,
        "enableLinks": true,
        "showUser": false,
        "showTime": true,
        "showImages": false,
        "lang": 'en',
        "showInteraction": false,
        "linksInNewWindow": true,
        "dateFunction": dateFormatter
    };
    twitterFetcher.fetch(configProfile);
});

function dateFormatter(date) {
    var m = moment(date);
    m.subtract(4, 'hours');
    if (m.isBefore(moment().subtract(3, 'days')))
        return m.format('MM/DD/YYYY');
    else
        return m.fromNow();
}