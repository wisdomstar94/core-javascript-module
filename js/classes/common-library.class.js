/**
 * @callback GetChildElementHeightCallback
 * @param {number} height
 */

/**
 * @description const commonLibrary = new CommonLibrary(); commonLibrary.함수명() ... 형식으로 사용하면 됩니다. 다용도 함수들을 모아놓은 클래스 입니다.
 */
class CommonLibrary {
  /**
   * @description 현재 title 태그의 내용을 반환하는 함수입니다. (만약, <title>test-page</title> 라고 되어 있다면 "test-page" 라는 문자열이 반환됩니다.)
   */
  getHtmlTitle() {
    const titleElement = document.getElementsByTagName('title')[0];
    return titleElement.textContent;
  }

  /**
   * @description 최소값과 최대값을 받아 그 사이의 정수형 숫자를 반환하는 함수입니다.
   */
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * @description 특정 길이의 랜덤문자열을 반환하는 함수입니다.
   */
  getRandomString(str_length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < str_length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  /**
   * @description 특정 길이의 랜덤문자열과 타임스탬프값을 합친 유니크한 토큰 문자열을 반환하는 함수입니다. 함수가 매번 호출 될 때마다 유니크한 토큰이 반환됩니다. (timestamp 가 13자 이므로, 토큰의 길이는 20자 이상으로 사용할 것을 권장합니다.)
   * @param str_length 토큰 길이 (15보다 작으면 안되며, 20 이상 권장. 길이가 클수록 중복되는 토큰이 반환될 확률은 기하급수적으로 줄어듭니다.)
   */
  getUniqueToken(str_length) {
    const timestamp = new Date().getTime();
    const timestamp_length = timestamp.toString().length;
    const str_max_length = str_length - timestamp_length;
    const first_length = this.getRandomNumber(1, str_max_length);
    const second_length = str_max_length - first_length;
    return ''.concat(
      this.getRandomString(first_length),
      (new Date()).getTime() + '',
      this.getRandomString(second_length)
    );
  }

  /**
   * @description localstorage 에 값을 저장하는 함수입니다.
   * @param {string} name 
   * @param {string} value 
   */
  setVariable(name, value) {
    localStorage.setItem(name, value);
  }
  
  /**
   * @description localstorage 에 저장된 값을 반환하는 함수입니다.
   * @param {string} name 
   */
  getVariable(name) {
    return localStorage.getItem(name);
  }

  /**
   * @description localstorage 에 저장된 값을 제거하는 함수입니다.
   * @param {string} name 
   */
  clearVariable(name) {
    localStorage.removeItem(name);
  }

  /**
   * @description data-include-path 속성이 존재하는 태그마다 AJAX 를 통해 컴포넌트를 가져와 화면에 표시하는 함수
   */
  includePathHtml() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
      var includePath = el.dataset.includePath;
      if (includePath) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              el.outerHTML = this.responseText;
          }
        };
        xhttp.open('GET', includePath, true);
        xhttp.send();
      }
    });
  }

  /**
   * @description 특정 요소의 하위 요소의 DOM 변화를 감지하는 MutationObserver 을 반환하는 함수입니다.
   * @param {any} target 하위 요소의 DOM 변동을 감지할 타겟이 되는 부모 요소 입니다.
   * @param {function} callback 변동이 감지 되었을 때 호출될 callback 함수 입니다.
   * @returns {MutationObserver}
   */
  checkChildDomChange(target, callback) {
    // 감시자 인스턴스 만들기
    const observer = new MutationObserver((_mutations) => {
      // 노드가 변경 됐을 때의 작업
      callback();
    });

    // 감시자의 설정
    const option = {
      attributes: true,
      childList: true,
      characterData: true
    };

    // 대상 노드에 감시자 전달
    observer.observe(target, option);
    return observer; // 추후 observer.disconnect() 로 구독 해제 해주어야 합니다.
  }

  /**
   * @description 부모 요소 밑의 특정 자식의 컨텐츠 높이를 화면에 보여주기 전에 미리 받아볼 수 있게 해주는 함수입니다.
   * @param {any} parentElement 높이를 구하고 싶은 요소의 부모 요소 입니다.
   * @param {any} childElement 높이를 구하고 싶은 자식 요소 입니다.
   * @param {GetChildElementHeightCallback} callback 높이를 인자로 받는 콜백 함수 입니다.
   */
  getChildElementHeight(parentElement, childElement, callback) {
    const childElementClone = childElement.cloneNode(true);
    childElementClone.classList.add('temp-content-height-check');
    childElementClone.style.position = 'absolute';
    childElementClone.style.top = '0';
    childElementClone.style.left = '0';
    childElementClone.style.width = '100%';
    childElementClone.style.opacity = 0;
    childElementClone.style.height = 'auto';
    
    const observer = this.checkChildDomChange(parentElement, function() {
      const height = childElementClone.clientHeight;
      childElementClone.remove();
      callback(height);
      observer.disconnect();
    });
    parentElement.appendChild(childElementClone); 
  }

  /**
   * @description element 에 임시 노드를 append 하고 해당 dom 변경 이벤트에 대한 콜백함수를 호출하는 함수입니다.
   * @param {any} element 
   * @param {function} callback 
   */
  forceDomEventCatch(element, callback) {
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '0';
    tempDiv.style.left = '0';
    tempDiv.style.width = '0';
    tempDiv.style.height = '0';

    const observer = this.checkChildDomChange(element, function() {
      tempDiv.remove();
      callback();  
      observer.disconnect();
    });
    element.appendChild(tempDiv);
  }

  /**
   * @description 접속한 기기가 pc 인지 mobile 인지에 대한 정보를 반환하는 함수입니다.
   * @returns {'pc' | 'mobile'}
   */
   getDeviceType() {
    const pcDevice = 'win16|win32|win64|mac|macos|macintel|windows';
    let platform;
    if (navigator.userAgentData !== undefined) {
      platform = navigator.userAgentData.platform;
    } else {
      platform = navigator.platform;
    }
    // console.log('platform', platform);
    // alert('platform = ' + platform);

    if (typeof platform === 'string') {
      if (pcDevice.toLowerCase().indexOf(platform.toLowerCase()) < 0 || platform === '') {
        return 'mobile';
      } else {
        return 'pc';
      }
    }

    return 'pc';
  }

  /**
   * @description url query string 값을 반환하는 함수입니다.
   */
  getUrlQueryStringValues() {
    const obj = {};

    // console.log('__getUrlQueryStringValues() 호출됨..!');
    const urlSearchParams = new URLSearchParams(location.search)
    for (const item of urlSearchParams) {
      // console.log('item', item);
      const param = item[0];
      const value = item[1];
      // console.log(`param = ${param}, value = ${value}`);

      obj[param] = value;
    }

    return obj;
  }
}
