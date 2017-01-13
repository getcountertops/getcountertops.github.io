jQuery(document).ready(function($) {

  $('.introduction__image').fixedsticky();
  $('.sidebar').fixedsticky();
  $('#breadcrumbs').fixedsticky();

  $(function() {
    var pathArray = window.location.pathname.split( '/' );
    // var path1 = pathArray[0];
    var path2 = pathArray[1]; //products
    var path3 = pathArray[2]; //product name
    var path4 = pathArray[3]; //product material or type

    var test = 'a[href^="http://localhost:3000/products/' + location.pathname.split("/")[2] + '/' + '"]';

    if ((location.pathname.split("/")[3]) !== "") {
      $('a[href^="http://localhost:3000/products/' + location.pathname.split("/")[2] + '/' + location.pathname.split("/")[3] + '/' + '"]').addClass('is-active');

      var product = location.pathname.split("/")[2];

      product = product.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });

      $('a[data=' + product + ']').addClass('is-active');
    }
    else if ((location.pathname.split("/")[2]) !== "") {
      $('a[href^="http://localhost:3000/products/' + location.pathname.split("/")[2] + '"]').addClass('is-active');
    }
  });


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
    nextArrow: '<a class="slider-arrow"><i class="fa fa-angle-right"></i></a>',
    prevArrow: '<a class="slider-arrow"><i class="fa fa-angle-left"></i></a>',
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
