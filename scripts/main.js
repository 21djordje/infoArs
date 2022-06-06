$(document).ready(function () {
  "use strict";

  var c,
    currentScrollTop = 0,
    navbar = $(".navbar");

  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });

  var isAlreadyRun = false;

  $(window).scroll(function () {
    $(".stats-bg").each(function (i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object + 20) {
        if (!isAlreadyRun) {
          $(".counter-number").each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 3500,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          });
        }
        isAlreadyRun = true;
      }
    });
  });
});

var splide = new Splide(".splide-testimonials", {
  perPage: 2,
  rewind: true,
  arrows: false,
  gap: "30px",
  breakpoints: {
    1199: {
      perPage: 2,
      pagination: true,
      type: "loop",
    },
    992: {
      perPage: 2,
      pagination: true,
      arrows: false,
      type: "loop",
      gap: "20px",
    },
    768: {
      perPage: 1,
      pagination: true,
      type: "loop",
      gap: "0px",
    },
  },
});
splide.mount();
