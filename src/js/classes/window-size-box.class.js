/**
 * @description window 창 크기만큼 selector element 사이즈를 지정하는 기능을 제공하는 클래스 입니다.
 * @requires CommonLibrary
 */
class WindowSizeBox {
  /**
   * @description CommonLibrary 클래스 객체가 저장될 변수입니다.
   */
  commonLibrary;

  /**
   * @description selector
   */
  selector;

  /**
   * @description window width 값 입니다.
   */
  width;

  /**
   * @description window height 값 입니다.
   */
  height;

  constructor(selector) {
    const t = this;
    this.commonLibrary = new CommonLibrary();
    this.selector = selector;
    window.addEventListener('resize', function() {
      t.checkSize();
    });
    this.checkSize();
  }

  /**
   * @description selector 에 해당하는 element 를 반환하는 함수입니다.
   */
  getElement() {
    return document.querySelector(this.selector);
  }

  /**
   * @description 현재 window 의 너비, 높이 값을 가져와 element 에 반영하는 함수입니다.
   */
  checkSize() {
    if (this.commonLibrary.getDeviceType() === 'pc') {
      // this.width = window.outerWidth;
      // this.height = window.outerHeight;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else {
      this.width = window.outerWidth;
      this.height = window.outerHeight;
      // this.width = window.innerWidth;
      // this.height = window.innerHeight;
    }

    this.getElement().style.width = this.width + 'px';
    this.getElement().style.height = this.height + 'px';
  }
}