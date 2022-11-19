// to top circle button Area Start

$(document).ready(function () {
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();

  $(window).scroll(updateProgress);

  var offset = 50;
  var duration = 500;

  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });

  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate(
      {
        scrollTop: 0,
      },
      duration
    );
    return false;
  });
});

// to top circle button Area End

// Nav Menu Area Start

$(document).ready(function () {
  $(document).on("click", ".hk-header-area li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Nav Menu Area End

// Video Popup Area Start

$(document).ready(function () {
  $(".video-play-btn").magnificPopup({
    type: "video",
  });
});

// Video Popup Area End

// data-background Area Start

$("[data-background]").each(function () {
  $(this).css(
    "background-image",
    "url(" + $(this).attr("data-background") + ")"
  );
});

// data-background Area End

// scroll header Area Start

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll >= 100) {
      $(".stick-area").addClass("is-stick");
      $(".navbar").addClass("navbar_active");
    } else {
      $(".stick-area").removeClass("is-stick");
      $(".navbar").removeClass("navbar_active");
    }
  });
});

// scroll header Area End

//   porgress bar Area Start

$(document).ready(function () {
  $("#bar1").barfiller({
    barColor: "#ff3d4f",
    duration: 1000,
  });
  $("#bar2").barfiller({
    barColor: "#ff3d4f",
    duration: 1000,
  });
  $("#bar3").barfiller({
    barColor: "#ff3d4f",
    duration: 1000,
  });
});

//   porgress bar Area End

// counterup Area Start

$(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

// counterup Area End

// isotope Area Start

$(document).ready(function () {
  $(".gallery").isotope();

  $(".filter span").on("click", function () {
    var selector = $(this).attr("data-filter");
    $(".gallery").isotope({
      filter: selector,
    });
  });
});

// init Isotope

$(".filter span:first-child").addClass("active");

// filter items on button click

$(".filter").on("click", "span", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// isotope Area End

// swiper slider Area Start

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
});

var swiper = new Swiper(".mySwiper-1", {
  watchSlidesProgress: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// swiper slider Area End
