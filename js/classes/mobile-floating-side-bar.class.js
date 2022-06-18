/**
 * @description mobile floating side bar
 */
class MobileFloatingSideBar {
  /**
   * @description side bar 의 타겟이 되는 element 입니다.
   */
  targetElement;

  /**
   * @description transition 될 때의 속도입니다.
   */
  transitionSpeed = 300; 

  constructor(selector) {
    this.targetElement = document.querySelector(selector);
    this.displayNone();
  }

  /**
   * @description transition 효과를 없애는 함수입니다.
   */
  removeTransition() {
    this.targetElement.querySelector('.background').style.transition = 'none';
  }

  /**
   * @description transition 효과를 부여하는 함수입니다.
   */
  addTransition() {
    this.targetElement.querySelector('.background').style.transition = (this.transitionSpeed / 1000) + 's all';
  }

  /**
   * @description background element 를 클릭했을 때 호출되는 함수입니다.
   */
  backgroundClick() {
    this.hide();
  }

  /**
   * @description target element 을 화면에서 보이지 않게 하는 클래스를 부여하는 함수입니다.
   */
  displayNone() {
    this.targetElement.classList.add('hide');
  }

  /**
   * @description target element 을 화면에서 보이지 않게 하는 클래스를 제거하는 함수입니다.
   */
  display() {
    this.targetElement.classList.remove('hide');
  }

  /**
   * @description side bar 를 보이게 하는 함수입니다.
   */
  show() {
    const t = this;
    this.display();
    setTimeout(function() {
      t.targetElement.querySelector('.background').classList.remove('hide');
      t.targetElement.querySelector('.side-bar').classList.remove('hide');
    });
  }

  /**
   * @description side bar 를 감추는 함수입니다.
   */
  hide() {
    const t = this;
    this.targetElement.querySelector('.background').classList.add('hide');
    this.targetElement.querySelector('.side-bar').classList.add('hide');
    setTimeout(function() {
      t.displayNone();
    }, this.transitionSpeed);
  }
}