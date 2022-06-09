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

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
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

function handleTickInit(tick) {
  // uncomment to set labels to different language
  /*
  var locale = {
      YEAR_PLURAL: 'Jaren',
      YEAR_SINGULAR: 'Jaar',
      MONTH_PLURAL: 'Maanden',
      MONTH_SINGULAR: 'Maand',
      WEEK_PLURAL: 'Weken',
      WEEK_SINGULAR: 'Week',
      DAY_PLURAL: 'Dagen',
      DAY_SINGULAR: 'Dag',
      HOUR_PLURAL: 'Uren',
      HOUR_SINGULAR: 'Uur',
      MINUTE_PLURAL: 'Minuten',
      MINUTE_SINGULAR: 'Minuut',
      SECOND_PLURAL: 'Seconden',
      SECOND_SINGULAR: 'Seconde',
      MILLISECOND_PLURAL: 'Milliseconden',
      MILLISECOND_SINGULAR: 'Milliseconde'
  };

  for (var key in locale) {
      if (!locale.hasOwnProperty(key)) { continue; }
      tick.setConstant(key, locale[key]);
  }
  */

  // format of due date is ISO8601
  // https://en.wikipedia.org/wiki/ISO_8601

  // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
  // '2019'                       to count down to 2019
  // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1

  // create the countdown counter
  var counter = Tick.count.down("2022-09-01T00:00:00+01:00");

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    // redirect, uncomment the next line
    // window.location = 'my-location.html'
    // hide counter, uncomment the next line
    // tick.root.style.display = 'none';
    // show message, uncomment the next line
    // document.querySelector('.tick-onended-message').style.display = '';
  };
}
