jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var slider1 = new Swiper(".slider1", {
    effect: "slide",

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  var slider2 = new Swiper(".slider2", {
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  var slider3 = new Swiper(".slider3", {
    effect: "cube",

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
