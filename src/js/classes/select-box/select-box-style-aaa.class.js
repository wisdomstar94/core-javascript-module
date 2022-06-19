/**
 * @typedef ValueItem
 * @property {string} text 
 * @property {string} value 
 */

/**
 * @description select box 의 aaa style 형태로 UI 를 제공하게 해주는 클래스 입니다.
 */
 class SelectBoxStyleAAA {
  /**
   * @description select box style aaa 를 적용할 대상이 되는 element 의 선택자 입니다.
   */
  selector;

  /**
   * @type {ValueItem[]}
   * @description select box item 이 저장되는 변수입니다.
   */
  valueItems = [];

  /**
   * @type {string}
   * @description 아무것도 선택하지 않은 상태일 때 표시될 문구입니다.
   */
  placeholder = '선택';

  /**
   * @type {boolean}
   * @description toggle 가능 여부 입니다. (true : toggle 가능한 상태, false : toggle 불가능한 상태)
   */
  isTogglePossible = true;








  constructor(selector) {
    this.selector = selector;
  }









  /**
     * @description [private] 메인 target 이 되는 element 를 반환하는 함수입니다.
     */
  __getMainTargetElement() {
    return document.querySelector(this.selector);
  }

  /**
   * @description [private] 화면에 보이지 않고 focus, focusout 등의 이벤트 핸들링을 위한 element 를 반환하는 함수입니다.
   */
  __getVirtualSelectBoxElement() {
    return this.__getMainTargetElement().querySelector('.virtual-select-box');
  }

  /**
   * @description [private] 항상 화면에 보여지는 영역의 element 를 반환하는 함수입니다.
   */
  __getSelectDisplayBoxElement() {
    return this.__getMainTargetElement().querySelector('.select-display-box');
  }

  /**
   * @description [private] select box items 가 표시되는 영역의 element 를 반환하는 함수입니다.
   */
  __getSelectItemsBoxElement() {
    return this.__getMainTargetElement().querySelector('.select-items-box');
  }

  /**
   * @description [private] select box items 의 ul element 를 반환하는 함수입니다.
   */
  __getSelectItemsBoxUlElement() {
    return this.__getSelectItemsBoxElement().querySelector('ul.select-item-list');
  }

  /**
   * @description [private] 선택된 값의 텍스트가 표시되는 element 를 반환하는 함수입니다.
   */
  __getSelectedTextElement() {
    return this.__getSelectDisplayBoxElement().querySelector('.selected-text');
  }










  /**
   * @description [private] DOM 에 있는 data-current-selected-value 값을 반환하는 함수입니다.
   */
  __getCurrentSelectedValueFromDom() {
    return this.__getMainTargetElement().getAttribute('data-current-selected-value');
  }

  /**
   * @description [private] 현재 select box items 가 표시되고 있는지 아닌지에 대한 여부를 반환하는 함수입니다.
   * @returns {boolean}
   */
  __isOpend() {
    return this.__getMainTargetElement().getAttribute('data-opend') === 'true';
  }

  /**
   * @description [private] select box items 를 표시하는 함수입니다.
   */
  __open() {
    const t = this;
    this.__getSelectItemsBoxElement().style.display = 'block';
    setTimeout(function() {
      t.__getMainTargetElement().setAttribute('data-opend', 'true');
      t.__showSelectedItemDisplay();
    });
  }

  /**
   * @description [private] select box items 를 감추는 함수입니다.
   */
  __close() {
    const t = this;
    this.__getMainTargetElement().setAttribute('data-opend', 'false');
    setTimeout(function() {
      t.__getSelectItemsBoxElement().style.display = 'none';
    }, 300);
  }

  /**
   * @description [private] select box items 가 표시되면 감추고, 감추어져 있으면 표시하는 함수입니다.
   */
  __toggle() {
    if (!this.isTogglePossible) {
      return;
    }

    if (this.__isOpend()) {
      this.__close();
    } else {
      this.__open();
      this.__getVirtualSelectBoxElement().focus();
    }
  }

  /**
   * @description [private] 필요한 이벤트 핸들링을 설정하는 함수입니다. 최초 한번만 호출되어야 합니다.
   */
  __settingEventsHandling() {
    const t = this;
    this.__getMainTargetElement().querySelector('.select-display-box').addEventListener('click', function() {
      t.__toggle();  
    });
    this.__getVirtualSelectBoxElement().addEventListener('focus', function() {
      // ...
    });
    this.__getVirtualSelectBoxElement().addEventListener('focusout', function() {
      t.isTogglePossible = false;
      t.__close();
      setTimeout(function() {
        t.isTogglePossible = true; 
      });
    });
  }

  /**
   * @description [private] valueItems 데이터를 DOM 에 표시하는 함수입니다. 최초 한번만 호출되어야 합니다.
   */
  __generateValueItemsToDOM() {
    const t = this;
    this.__removeAllChild(this.__getSelectItemsBoxUlElement());

    for (const valueItem of this.valueItems) {
      const element = document.createElement('li');
      element.classList.add('item');
      element.innerText = valueItem.text;
      element.setAttribute('data-text', valueItem.text);
      element.setAttribute('data-value', valueItem.value);
      element.setAttribute('data-selected', this.__getCurrentSelectedValueFromDom() === valueItem.value ? 'true' : 'false');
      element.addEventListener('click', function() {
        t.setSelectedValue(element.getAttribute('data-value'));
        t.__close();
      });
      this.__getSelectItemsBoxUlElement().appendChild(element);
    }

    this.setSelectedValue(this.__getCurrentSelectedValueFromDom());
  }

  /**
   * @description [private] target element 의 자식 요소를 모두 dom 에서 제거하는 함수입니다.
   */
  __removeAllChild(target) {
    while (target.hasChildNodes()) {
      target.removeChild(target.firstChild);
    }
  }

  /**
   * @description [private] 현재 선택된 값에 따라 select items 의 속성 값을 변경하는 함수입니다.
   */
  __checkSelectItems() {
    const lis = this.__getSelectItemsBoxUlElement().children;
    if (lis.length === 0) {
      return;
    }

    for (const li of lis) {
      const value = li.getAttribute('data-value');
      li.setAttribute('data-selected', value === this.getSelectedValue() ? 'true' : 'false');
    }
  }

  /**
   * @description value 값을 받아 해당 value 에 매치되는 text 값을 반환하는 함수입니다.
   * @param {string} value 
   */
  __getTextFromValue(value) {
    let result = '';
    for (const valueItem of this.valueItems) {
      if (valueItem.value === value) {
        result = valueItem.text;
        break;
      }
    }
    return result;
  }

  /**
   * @description 현재 선택된 값이 valueItems 에 속한 값이 맞는지 아닌지 여부를 반환하는 함수입니다.
   * @returns {boolean}
   */
  __isSelectedValueContainValueItems() {
    const selectedValue = this.getSelectedValue();
    const values = this.valueItems.map(function(valueItem, index) {
      return valueItem.value;
    });
    return values.includes(selectedValue);
  }


  /**
   * @description 선택된 값에 따라 placeholder 를 표시하거나 하지 않는 함수입니다.
   */
  __checkPlaceholder() {
    if (this.__isSelectedValueContainValueItems()) {
      // placeholder 처리하지 않음
      this.__getSelectedTextElement().classList.remove('placeholder');
    } else {
      // placeholder 처리
      this.__getSelectedTextElement().classList.add('placeholder');
      this.__getSelectedTextElement().innerText = this.placeholder;
    }
  }

  /**
   * @description 선택된 값의 index 값을 반환하는 함수입니다.
   * @returns {number}
   */
  __getSelectedValueIndex() {
    const value = this.getSelectedValue();
    let index = 0;
    for (const valueItem of this.valueItems) {
      if (valueItem.value === value) {
        break;
      }
      index++;
    }
    return index;
  }

  /**
   * @description 선택된 item 이 선택 영역에서 보이도록 하는 함수입니다.
   */
  __showSelectedItemDisplay() {
    const selectedIndex = this.__getSelectedValueIndex();
    const selectedliElement = this.__getSelectItemsBoxUlElement().children[selectedIndex];
    this.__getSelectItemsBoxElement().scrollTop = selectedliElement.offsetTop;
  }







  /**
   * @description 초기화 함수입니다. 최초 한번만 호출되는 함수입니다.
   */
  init() {
    // ...
    this.__settingEventsHandling();
    this.__generateValueItemsToDOM();
  }

  /**
   * @description select box item 을 추가하는 함수입니다. init 함수가 호출되기 전에 호출되어야 합니다.
   * @param {ValueItem} valueItem
   */
  appendValueItem(valueItem) {
    this.valueItems.push(valueItem);
  }

  /**
   * @description select box item 을 셋팅하는 함수입니다. init 함수가 호출되기 전에 호출되어야 합니다.
   * @param {ValueItem[]} valueItems
   */
  setValueItems(valueItems) {
    this.valueItems = valueItems;
  }

  /**
   * @description 아무것도 선택되지 않았을 때 표시되는 문구를 지정하는 함수입니다. init 함수가 호출되기 전에 호출되어야 합니다. (기본값은 '선택' 입니다.)
   * @param {string} placeholder 
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
  }

  /**
   * @description 선택되어 있는 값을 지정하는 함수입니다. (기본값은 '' 공백 입니다.)
   * @param {string} value 
   */
  setSelectedValue(value) {
    this.__getMainTargetElement().setAttribute('data-current-selected-value', value);
    this.__getSelectedTextElement().innerText = this.__getTextFromValue(value);
    this.__checkPlaceholder();
    this.__checkSelectItems();
  }

  /**
   * @description 선택되어 있는 값을 반환하는 함수입니다.
   * @returns {string}
   */
  getSelectedValue() {
    return this.__getMainTargetElement().getAttribute('data-current-selected-value');
  }
}