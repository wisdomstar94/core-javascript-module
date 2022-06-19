let swiperCustom;
let swiperCustom2;

window.addEventListener('load', function() {
  console.log('onload..');

  swiperCustom = new SwiperCustom('#swiper-custom');
  swiperCustom.init();
  // swiperCustom.slideToIndex(2); // 초기에 위치할 슬라이드 아이템 index 값

  swiperCustom2 = new SwiperCustom('#swiper-custom2');
  swiperCustom2.setDirection('vertical');
  swiperCustom2.setLoop(false);
  swiperCustom2.init();
});
