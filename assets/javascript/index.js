'use strict';

console.log('Hello world!');
'use strict';

jQuery(document).ready(function ($) {

  $('.header').Stickyfill();
  $('.content__image').Stickyfill();
  $('.sidebar').Stickyfill();

  $(window).resize(function () {
    if ($(window).width() < 500) {
      Stickyfill.stop();
    } else {
      Stickyfill.init();
    }
  });

  var myElement = document.querySelector(".header");
  // construct an instance of Headroom, passing the element
  var headroom = new Headroom(myElement);
  // initialise
  headroom.init();

  $(window).scroll(function () {
    $(".header").removeClass(".header--bottom");
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      //you are at bottom
      $(".header").removeClass(".header--unpinned");
      $(".header").add(".header--bottom");
    }
  });

  var secondVisit = sessionStorage.getItem('secondVisit');
  if (secondVisit == null) {
    sessionStorage.setItem('secondVisit', 1);
    $('.landing').show();
  } else {
    $('.landing').hide();
  }

  $(function () {
    var pathArray = window.location.pathname.split('/');
    // var path1 = pathArray[0];
    // var path2 = pathArray[1]; //products
    // var path3 = pathArray[2]; //product name
    // var path4 = pathArray[3]; //product material or type

    // var test = 'a[href^="http://localhost:3000/products/' + location.pathname.split("/")[2] + '/' + '"]';

    if (location.pathname.split("/")[3]) {
      $('a[href^="' + location.pathname + '"]').addClass('is-active');

      var product = location.pathname.split("/")[2];

      // product = product.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      //   return letter.toUpperCase();
      // });

      $('a[data=' + product + ']').addClass('is-active');
      $('a[href^="' + window.location.href + '"]').addClass('is-active');
    } else if (location.pathname.split("/")[2]) {
      $('a[href^="' + window.location.href + '"]').addClass('is-active');
    }
  });

  // $('#image-modal').on('show.bs.modal', function (event) {
  //   var button = $(event.relatedTarget) // Button that triggered the modal
  //   var image = button.data('image') // Extract info from data-* attributes
  //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //   var modal = $(this)
  //   modal.find('.modal-image').attr("src", image);
  // })
});
//# sourceMappingURL=index.js.map
