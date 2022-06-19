/**
 * @typedef {ScrollInfo}
 * @param {number} scrollTop 스크롤된 top 값입니다.
 * @param {number} scrollHeight 보이지 않는 영역까지 합친 총 컨텐츠 높이입니다.
 * @param {number} clientHeight 보여지는 부분에 대한 컨텐츠 높이입니다.
 * @param {boolean} isLastScrollArea 마지막 영역으로 스크롤 되었는지에 대한 여부입니다. (무한 스크롤링시 활용 가능)
 * 
 * @callback ScrollInfoCallbackFunction
 * @param {ScrollInfo} info
 */

/**
 * @description 스크롤 이벤트를 감지하여 필요로 하는 정보만 계산하는 클래스입니다.
 */
class ScrollCheck {
  /**
   * @description selector
   */
  selector;

  /**
   * @type {undefined | 'window'}
   * @description 스크롤을 체크해야하는 대상의 target 종류입니다.
   */
  scrollCheckTarget;

  /**
   * @type {ScrollInfoCallbackFunction}
   * @description 스크롤시 발생한 정보들을 담아 호출할 콜백 함수 입니다.
   */
  callback;

  /**
   * @param {any} selector 
   * @param {ScrollInfoCallbackFunction} callback 
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
   * @description 필요한 이벤트를 설정하거나 값을 셋팅하는 초기화 함수입니다. (최초 한번만 호출되는 함수입니다.)
   */
  init() {
    const t = this;

    this.getElement().addEventListener('scroll', function(event) {
      let scrollTop = 0;
      let scrollHeight = 0;
      let clientHeight = 0;

      if (t.scrollCheckTarget === 'window') {
        const html = document.querySelector('html');
        scrollTop = html.scrollTop;
        scrollHeight = html.scrollHeight;
        clientHeight = html.clientHeight;
      } else {
        scrollTop = event.target.scrollTop;
        scrollHeight = event.target.scrollHeight;
        clientHeight = event.target.clientHeight;
      }

      let isLastScrollArea = false;
      if (scrollHeight !== undefined && clientHeight !== undefined) {
        if ((scrollHeight - clientHeight - 40) < scrollTop) {
          isLastScrollArea = true;
        }
      }

      t.callback({
        scrollTop: scrollTop,
        scrollHeight: scrollHeight,
        clientHeight: clientHeight,
        isLastScrollArea: isLastScrollArea,
      });
    });
  }
}
