/**
 * @callback WheelInfoCallback
 * @param {WheelInfo} info
 * 
 * @typedef WheelInfo
 * @property {'up' | 'down'} wheelDirection 위로 휠을 하였는지, 아니면 아래로 휠을 하였는지에 대한 정보
 */

/**
 * @description 휠에 대한 정보를 계산하는 클래스 입니다.
 */
class WheelCheck {
  /**
   * @type {string}
   * @description selector
   */
  selector;

  /**
   * @type {undefined | 'window'}
   * @description scroll 대상이 되는 타겟 종류 입니다.
   */
  scrollCheckTarget;

  /**
   * @type {WheelInfoCallback}
   * @description wheel 이벤트 발생시 호출할 콜백함수입니다.
   */
  callback;

  /**
   * @param {string} selector 
   * @param {WheelInfoCallback} callback 
   */
  constructor(selector, callback) {
    if (typeof selector === 'string') {
      this.selector = selector;
    } else {
      this.scrollCheckTarget = 'window';
    }

    this.callback = callback;
    this.init();
  }

  /**
   * @description selector 에 해당하는 element 를 반환하는 함수입니다.
   */
  getElement() {
    if (typeof this.selector !== 'string') {
      return window;
    } else {
      return document.querySelector(this.selector);
    }
  }

  /**
   * @description 필요한 이벤트를 설정하는 등의 초기화 함수 입니다. (이 함수는 최초 한번만 호출됩니다.)
   */
  init() {
    const t = this;

    this.getElement().addEventListener('wheel', function(event) {
      const info = {
        wheelDirection: '',
      };

      if (event.deltaY < 0) {
        // console.log("스크롤 위로");
        info.wheelDirection = 'up';
      } else {
        // console.log("스크롤 아래로");
        info.wheelDirection = 'down';
      }

      t.callback(info);
    });
  }
}