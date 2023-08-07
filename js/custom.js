(function ($) {
  "use strict";

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - 0;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });

  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
})(window.jQuery);

function clickcolor(event) {
  var badgeElement = event.currentTarget;
  var computedStyle = window.getComputedStyle(badgeElement);
  var currentColor = computedStyle.getPropertyValue("--bg-color").trim();

  if (currentColor === "red") {
    badgeElement.style.setProperty("--bg-color", "black");
    badgeElement.style.setProperty("--hover-color", "red");
  } else {
    badgeElement.style.setProperty("--bg-color", "red");
    badgeElement.style.setProperty("--hover-color", "black");
  }
}
