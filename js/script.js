jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  const myswiper1 = new Swiper(".myswiper1", {
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination",
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });
});

const myswiper2 = new Swiper(".myswiper2", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
