jQuery(document).ready(function($) {

  $('.introduction__image').fixedsticky();
  $('.sidebar').fixedsticky();
  $('#breadcrumbs').fixedsticky();

  // var secondVisit = sessionStorage.getItem('secondVisit');
  // if (secondVisit == null) {
  //     sessionStorage.setItem('secondVisit', 1);
  //     $('.landing').show();
  // } else {
  //   $('.landing').hide();
  // }

  $(document).ready(function(){
  $('.our-story-slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
    appendArrows: '.our-story-slider-nav',
    nextArrow: '<a class="slider-arrow"><i class="fa fa-caret-right"></i></a>',
    prevArrow: '<a class="slider-arrow"><i class="fa fa-caret-left"></i></a>',
  });
});


  // $('.owl-carousel').owlCarousel({
  //   number: 1,
  //   nav: true
  // })


//   $('.countertops').hover(function() {
//     $('.breadcrumbs-wrap').toggle();
// });

  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });



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

// // grab an element
// var myElement = document.querySelector(".header");
// // construct an instance of Headroom, passing the element
// var headroom  = new Headroom(myElement);
// // initialise
// headroom.init();
