(function ($) {
  $(document).ready(function () {
    "use strict";
    var div = $(".header");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      div.css({ opacity: 1 - st / 500 });
    });
    var divs = $(".page-header");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      divs.css({ opacity: 1 - st / 400 });
    });
    $("#parallax").parallax({
      invertX: true,
      invertY: true,
      scalarX: 10,
      frictionY: 0.1,
    });
    $("#typewriter").typewriter({
      prefix: "",
      text: ["Denim Clothing Company"],
      typeDelay: 100,
      waitingTime: 1500,
      blinkSpeed: 800,
    });
    $(".navigation-menu ul li a").on("click", function (e) {
      $(".transition-overlay").toggleClass("open");
    });
    $(".navigation-menu ul li a").on("click", function (e) {
      e.preventDefault();
      var goTo = this.getAttribute("href");
      setTimeout(function () {
        window.location = goTo;
      }, 1000);
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $(".navbar").addClass("hide");
        $(".navbar").css("transition-delay", "0s");
      } else {
        $(".navbar").removeClass("hide");
      }
    });
    $(".sandwich-btn").on("click", function (e) {
      if ($(".navigation-menu").hasClass("open")) {
        $("body").removeClass("overflow");
        $(".navigation-menu").removeClass("open");
        $(".navigation-menu .black-layer").css("transition-delay", "0.4s");
        $(".navigation-menu .green-layer").css("transition-delay", "0.8s");
        $(".black_logo").show();
        $(".white_logo").hide();
      } else {
        $(".navigation-menu").addClass("open");
        $("body").addClass("overflow");
        $(".navigation-menu .black-layer").css("transition-delay", "0.4s");
        $(".navigation-menu .green-layer").css("transition-delay", "0s");
        $(".black_logo").hide();
        $(".white_logo").show();
      }
      $(this).toggleClass("open");
    });
    $(".dots-menu").on("click", function (e) {
      $(this).toggleClass("active");
      $(".works-filter").toggleClass("active");
    });
    $(".case-details .case-navbar ul li a").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $($anchor.attr("href")).offset().top },
          1000,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });
  var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 1000) % 60, 10) * 100;
  $(".loadbar").animate({ width: width + "%" }, time);
  $(".glow").animate({ width: width + "%" }, time);
  var PercentageID = $("#precent"),
    start = 0,
    end = 100,
    durataion = time;
  animateValue(PercentageID, start, end, durataion);
  function animateValue(id, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    var timer = setInterval(function () {
      current += increment;
      $(obj).text(current + "%");
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  setTimeout(function () {
    $(".preloader").fadeOut(1000);
    $("body").addClass("page-loaded");
  }, time);
  var pageSection = $(".bg-image");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });
  var wow = new WOW({ animateClass: "animated", offset: 50 });
  wow.init();
  var $container = $(".works ul").imagesLoaded(function () {
    $container.isotope({ itemSelector: ".works ul li", layoutMode: "masonry" });
  });
  var $container = $(".works ul");
  $container.isotope({
    filter: "*",
    animationOptions: { duration: 750, easing: "linear", queue: false },
  });
  $(".works-filter li a").on("click", function (e) {
    $(".works-filter li a.current").removeClass("current");
    $(this).addClass("current");
    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: { duration: 750, easing: "linear", queue: false },
    });
    return false;
  });
  if (!document.getElementById("counter")) {
  } else {
    var lastWasLower = false;
    $(document).scroll(function () {
      var p = $("#counter");
      var position = p.position();
      var position2 = position.top;
      if ($(document).scrollTop() > position2 - 300) {
        if (!lastWasLower) $("#1").html("21");
        $("#2").html("37");
        $("#3").html("78");
        lastWasLower = true;
      } else {
        lastWasLower = false;
      }
    });
  }
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 0,
    pagination: { el: ".swiper-pagination", type: "fraction" },
    autoplay: { delay: 4500, disableOnInteraction: false },
    loop: true,
    loopedSlides: 3,
    thumbs: { swiper: galleryThumbs },
  });
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: "vertical",
    loop: true,
    loopedSlides: 3,
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      640: { slidesPerView: 1 },
      320: { slidesPerView: 1 },
    },
  });
  if ($(".gallery-top")[0]) {
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  } else {
  }
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 161, density: { enable: true, value_area: 800 } },
        color: { value: "#2f2f2f" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#c3c3c3",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
  
})(jQuery);
 