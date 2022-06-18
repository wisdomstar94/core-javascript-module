/**
 * @description 자식 요소의 너비 합 만큼 부모 요소의 너비를 지정하는 기능을 제공하는 클래스 입니다.
 * @requires CommonLibrary
 */
class ExpandWidthFromChildren {
  /**
   * @description element 선택자가 저장되는 변수입니다.
   */
  selector;

  /**
   * @description CommonLibrary 클래스로 생성된 객체가 저장되는 변수입니다.
   */
  commonLibrary;

  constructor(selector) {
    this.selector = selector; 
    this.commonLibrary = new CommonLibrary();
    this.init();
  }

  /**
   * @description 최초 필요한 이벤트를 설정하거나 함수를 호출하는 초기화 함수 입니다. (최초에 단 한번만 호출되는 함수입니다.)
   */
  init() {
    const t = this;
    this.checkSize();
    window.addEventListener('resize', function() {
      t.checkSize();
    });
    this.commonLibrary.checkChildDomChange(this.getElement(), function() {
      t.checkSize();
    });
  }

  /**
   * @description selector 선택자에 맞는 dom 의 element 요소를 반환하는 함수입니다.
   */
  getElement() {
    return document.querySelector(this.selector);
  }

  /**
   * @description 자식 요소의 너비 및 여백 등을 합친 총 너비 값을 selector element 에 반영하는 함수입니다.
   */
  checkSize() {
    let target = this.getElement();

    const targetPaddingLeft = Number(target.style.paddingLeft.replace(/\D/g, ''));
    const targetPaddingRight = Number(target.style.paddingRight.replace(/\D/g, ''));

    const children = target.children;

    let childrenTotalWidth = 0;
    let childrenTotalMarginLeft = 0;
    let childrenTotalMarginRight = 0;

    for (const child of children) {
      const childWidth = typeof child.getBoundingClientRect === 'function' ? child.getBoundingClientRect().width : child.clientWidth;
      const childMarginLeft = Number(child.style.marginLeft.replace(/\D/g, ''));
      const childMarginRight = Number(child.style.marginRight.replace(/\D/g, ''));
      childrenTotalWidth += childWidth;
      childrenTotalMarginLeft += childMarginLeft;
      childrenTotalMarginRight += childMarginRight;
    }

    const targetWidth = targetPaddingLeft + targetPaddingRight + childrenTotalWidth + childrenTotalMarginLeft + childrenTotalMarginRight + 1;

    target.style.width = targetWidth + 'px';
  }
}