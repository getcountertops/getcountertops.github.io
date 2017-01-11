'use strict';

console.log('Hello world!');
'use strict';

jQuery(document).ready(function ($) {

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


  $('.owl-carousel').owlCarousel({
    number: 1,
    dots: true
  });

  //   $('.countertops').hover(function() {
  //     $('.breadcrumbs-wrap').toggle();
  // });

  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function () {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });
});

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
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
//# sourceMappingURL=index.js.map
