/*global $, alert, console*/
$(function () {
    "use strict";
    // repair header height
    var myheader = $(".header"),
        list = $(".navbar .nav-head ul li"),
        links = $('.navbar .nav-head ul li a'),
        slide = $(".slider");
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
        //$(this).css('padding-top', (($(document).height() - $(slide).height()) / 2));
    });
    $(links).click(function () {        $(this).parent().addClass("active").siblings().removeClass("active");

                               });
    // bx slider     
    $(slide).bxSlider();
    //Center items
    $(slide).each(function () {
        //$(this).css('padding-top', (($(document).height() - $(slide).height()) / 2));
    });
    //Smooth Scroll
    $(links).click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1500);
    });
    // My slider auto
    (function autoslide() {
        $('.myslider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(2000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(2000);
                    autoslide();
                });
            } else {
                $(this).delay(3000).fadeOut(2000, function () {
                    $(this).removeClass('active').fadeOut(2000);
                    $('.myslider div').eq(0).addClass('active').fadeIn(2000);
                    autoslide();
                });
            }
        });
    }());
    
    //trigger mixitup plugin
    $('#projects').mixItUp();
    //Adjest shuffle links
    $('.shuffle li').click(function () {
        $(this).hover().style('cursor', 'pointer');
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // trigger Nice Scroll
    $('html').niceScroll({
        cursorcolor: '#1bbc9b',
        cursorborder: '1px solid #1bbc9b',
        cursorborderradius: '4px'
    });
    
});