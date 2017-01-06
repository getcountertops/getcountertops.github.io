jQuery(document).ready(function($) {

    var $toggle = $('#nav-toggle');
    var $menu = $('#nav-menu');

    $toggle.click(function() {
        $(this).toggleClass('is-active');
        $menu.toggleClass('is-active');
    });

    $('.modal-button').click(function() {
        var target = $(this).data('target');
        $('html').addClass('is-clipped');
        $(target).addClass('is-active');
    });

    $('.modal-background, .modal-close').click(function() {
        $('html').removeClass('is-clipped');
        $(this).parent().removeClass('is-active');
    });

    $('.modal-card-head .delete, .modal-card-foot .button').click(function() {
        $('html').removeClass('is-clipped');
        $('#modal-ter').removeClass('is-active');
    });

    $( '#breadcrumbs' ).fixedsticky();
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 120
                }, 1000);
                return false;
            }
        }
    });
});