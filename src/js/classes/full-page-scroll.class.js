/**
 * @description 풀페이지 스크롤 기능 구현을 지원하는 클래스 입니다.
 * @requires WindowSizeBox
 * @requires SwiperCustom
 * @requires WheelCheck
 */
class FullPageScroll {
  /**
   * @description SwiperCustom 클래스 객체가 저장되는 변수입니다.
   */
  swiperCustom;

  /**
   * @description WindowSizeBox 클래스 객체가 저장되는 변수입니다.
   */
  windowSizeBox;

  /**
   * @description WheelCheck 클래스 객체가 저장되는 함수입니다.
   */
  wheelCheck;

  /**
   * @description selector 
   */
  selector;

  constructor(selector) {
    this.selector = selector;
    this.windowSizeBox = new WindowSizeBox(selector);
    this.swiperCustom = new SwiperCustom(selector);
    this.init();
  }

  /**
   * @description selector 에 해당하는 element 반환하는 함수입니다.
   */
  getElement() {
    return document.querySelector(this.selector);
  }

  /**
   * @description 필요한 값을 셋팅하거나 필요한 클래스 객체를 생성하는 등 초기화 하는 함수입니다. (최초 한번만 호출되는 함수입니다.)
   */
  init() {
    const t = this;

    this.swiperCustom.setDirection('vertical');
    this.swiperCustom.setAutoplay(false);
    this.swiperCustom.setLoop(false);
    this.swiperCustom.setSpeed(1000);
    this.swiperCustom.init();

    this.wheelCheck = new WheelCheck(t.selector, function(info) {
      // console.log('wheel...');
      if (info.wheelDirection === 'up') {
        t.swiperCustom.sliding('prev');
      } else {
        t.swiperCustom.sliding('next');
      }
    });
  }
}
