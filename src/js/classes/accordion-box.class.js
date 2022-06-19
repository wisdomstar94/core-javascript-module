/**
 * @description 아코디언 박스 기능을 구현하기 위한 클래스 입니다.
 * @requires CommonLibrary CommonLibrary 클래스가 요구됩니다.
 */
class AccordionBox {
  /**
   * @description 아코디언 박스 아이템을 구별하는 클래스 식별자 입니다.
   */
  commonAccordionBoxElementClassName = 'common-accordion-box';

  /**
   * @description CommonLibrary 클래스 객체가 저장되는 변수입니다.
   */
  commonLibrary;

  constructor() {
    this.commonLibrary = new CommonLibrary();
    this.checkShowHideContentHeight();
  }

  /**
   * @description 최초 화면 렌더링시 아코디언 박스가 열려있는 요소의 현재 높이를 구해 해당 높이 값을 inline-style 로 부여하는 함수입니다. (높이를 고정 px 로 지정하지 않으면 아코디언 박스가 닫힐 때 transition 이 작동하지 않기 때문에 해당 함수를 작성하였습니다, 본 함수는 최초 한번만 호출됩니다.)
   */
  checkShowHideContentHeight() {
    const elements = document.querySelectorAll('.' + this.commonAccordionBoxElementClassName + '.show');
    for (const element of elements) {
      const hideContentElement = element.querySelector('.hide-content');
      hideContentElement.style.height = hideContentElement.clientHeight + 'px';
    }
  }

  /**
   * @description 클릭된 element 로부터 아코디언 박스가 시작되는 최상위 부모 element 를 반환하는 함수입니다.
   */
  getCommonAccordionBoxElement(clickedElement) {
    let commonAccordionBoxElement = clickedElement;
    for (let i = 0; i < 50; i++) {
      if (commonAccordionBoxElement.classList.contains(this.commonAccordionBoxElementClassName)) {
        break;
      }
      commonAccordionBoxElement = commonAccordionBoxElement.parentElement;
    }

    return commonAccordionBoxElement;
  }

  /**
   * @description 아코디언 박스가 열려있으면 닫고, 닫혀있으면 여는 함수입니다.
   */
  toggle(clickedElement) {
    const commonAccordionBoxElement = this.getCommonAccordionBoxElement(clickedElement);

    if (commonAccordionBoxElement.classList.contains('show')) {
      this.hide(clickedElement);
    } else {
      this.show(clickedElement);
    }
  }

  /**
   * @description 아코디언 박스를 여는 함수입니다.
   */
  show(clickedElement) {
    const commonAccordionBoxElement = this.getCommonAccordionBoxElement(clickedElement);
    const hideContentElement = commonAccordionBoxElement.querySelector('.hide-content');

    this.commonLibrary.getChildElementHeight(commonAccordionBoxElement, hideContentElement, function(height) {
      commonAccordionBoxElement.classList.add('show');
      hideContentElement.style.height = height + 'px';
    });
  }

  /**
   * @description 아코디언 박스를 닫는 함수입니다.
   */
  hide(clickedElement) {
    const commonAccordionBoxElement = this.getCommonAccordionBoxElement(clickedElement);
    const hideContentElement = commonAccordionBoxElement.querySelector('.hide-content');

    commonAccordionBoxElement.classList.remove('show');
    hideContentElement.style.height = '0';
  }
}