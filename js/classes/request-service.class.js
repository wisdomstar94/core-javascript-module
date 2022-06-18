/**
 * @callback AjaxSuccessCallback
 * @param {any} response
 * 
 * @callback AjaxErrorCallback
 * @param {any} response
 * 
 * @typedef AjaxOptions
 * @property {'get' | 'post' | 'put' | 'delete' | 'options' | 'patch' | 'head' | 'connect'} method 요청 method 입니다.
 * @property {string} url 요청 url 입니다.
 * @property {object} headers 요청 header 입니다.
 * @property {object} data 요청 data 입니다.
 * @property {boolean=} isUrlQueryString 요청 data 를 url query string 방식으로 보낼 것인지에 대한 여부입니다. method 가 GET 이거나 이 값이 true 이면 요청 data 는 url query string 방식으로 요청됩니다.
 * @property {'json' | 'form-data' | 'x-www-form-urlencoded'=} requestBodyType 요청 data 가 어떤 유형인지에 대한 값입니다. 지정하지 않을 경우 json 으로 처리됩니다.
 * @property {AjaxSuccessCallback} success ajax 성공시 호출되는 콜백 함수 입니다.
 * @property {AjaxErrorCallback} error ajax 실패시 호출되는 콜백 함수 입니다.
 * @property {'' | 'text' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'ms-stream'=} responseType 응답 값을 어떤 형태로 받을 것인지에 대한 여부입니다. 지정하지 않으면 json 으로 처리됩니다.
 * 
 * @typedef Response
 * @property {number} status 응답 status 코드입니다. (200, 404 ... 등)
 * @property {string} statusText 응답 status 코드에 대한 text 값입니다. (Forbidden, Not Found 등..)
 * @property {any} response 응답 본문 값 입니다.
 */

/**
 * @description request (ajax) 관련 기능을 제공하는 클래스 입니다.
 */
class RequestService {
  /**
   * @description 요청시 가능한 method 모음입니다.
   */
  allowMethods = ['get', 'post', 'put', 'delete', 'options', 'patch', 'head', 'connect'];

  /**
   * @description 요청시 가능한 responseType 모음입니다.
   */
  allowResponseType = ['', 'text', 'arraybuffer', 'blob', 'document', 'json', 'ms-stream'];

  /**
   * @description XMLHttpRequest 를 활용하여 request 를 보내는 javascript api 함수입니다. 
   * @param {AjaxOptions} options ajax 를 위한 필요 값 객체 입니다.
   */
  ajax(options) {
    const t = this;

    if (!this.allowMethods.includes(options.method)) {
      console.error(options.method + ' 은(는) 유효한 method가 아닙니다.');
      return;
    }

    if (typeof options.url !== 'string') {
      console.error(options.url + ' 은(는) 유효한 url이 아닙니다.');
      return;
    }

    /**
     * @description XMLHttpRequest 객체 생성 
     */
    const http = new XMLHttpRequest();

    /**
     * @description 요청 url 설정
     */
    let url = options.url;
    if (options.method.toLowerCase() === 'get' || options.isUrlQueryString === true) {
      url = url + this.getRequestDataToUrlQueryString(options.data);
    }

    /**
     * @description 요청 method, url 셋팅
     */
    http.open(options.method.toUpperCase(), url, true);

    /**
     * @description 요청 data 셋팅
     */
    let data = options.data;

    /**
     * @description 요청 header 셋팅
     */
    if (this.isExistOptionsHeader(options.headers)) {
      const keys = Object.keys(options.headers);
      for (const key of keys) {
        http.setRequestHeader(key, options.headers[key]);
      }
    }

    /**
     * @description 요청 data 유형에 따른 Content-Type Header 및 data 셋팅
     */
    switch (options.requestBodyType) {
      case 'x-www-form-urlencoded': 
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
        data = this.getRequestDataToUrlQueryString(data, false);
        break;
      case 'form-data': 
        // http.setRequestHeader('Content-Type', 'multipart/form-data; charset=UTF-8;'); 
        // http.setRequestHeader("Content-Type","multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substring(2, 4));
        // data = this.getRequestDataToFormData(data);
        break;
      // case '':
      //   data = this.getRequestDataToFormData(data);
      //   break;
      case 'json': 
      default: 
        http.setRequestHeader('Content-Type', 'application/json'); 
        data = JSON.stringify(data);
        break;
    }

    /**
     * @description 응답시 콜백 내용 셋팅
     */
    http.onreadystatechange = function() {
      if (http.readyState == 4) {
        if (http.status == 200 || http.status == 201){
          console.log("[status] : " + http.status);
          console.log("[response] : " + "[success]");    				   				    				
          // console.log("[response] : " + http.responseText);
          console.log("http", http); 
          if (typeof options.success === 'function') {
            // const response = http.response;
            options.success(t.getResponseObject(http));
          }
        } else {
          console.log("[status] : " + http.status);
          console.log("[response] : " + "[fail]");    				   				    				
          // console.log("[response] : " + http.responseText);
          console.log("http", http); 			 
          if (typeof options.error === 'function') {
            // const response = http.response;
            options.error(t.getResponseObject(http));  
          }
        }						    				
      }    			
    };

    /**
     * @description responseType 셋팅
     */
    if (this.allowResponseType.includes(options.responseType)) {
      http.responseType = options.responseType;
    } else {
      http.responseType = 'json';
    }

    /**
     * @description 요청 data 와 함께 request 전송
     */
    console.log('http.send..', data);
    http.send(data);
  }

  /**
   * @description options.headers 가 유효한지 체크하는 함수입니다.
   * @returns {boolean}
   */
  isExistOptionsHeader(headers) {
    if (typeof headers !== 'object') {
      return false;
    }

    const keys = Object.keys(headers);
    if (keys.length === 0) {
      return false;
    }

    for (const key of keys) {
      if (typeof headers[key] !== 'string') {
        console.error(headers);
        console.error('요청 header 값 중에 string 형식이 아닌 값이 존재합니다.');
        return false;
      }
    }

    return true;
  }

  /**
   * @description 요청 data 객체를 url query string 형태로 반환하는 함수입니다.
   * @param {object} data 요청 data 객체
   * @param {boolean=} isQuestionInclude url query string 반환시 맨 앞에 ? (물음표) 문자 포함 여부. (지정하지 않을 경우 자동 포함됩니다.)
   * @returns {string}
   */
  getRequestDataToUrlQueryString(data, isQuestionInclude) {
    if (typeof data !== 'object') {
      return '';
    }

    const keys = Object.keys(data);
    if (keys.length === 0) {
      return '';
    }

    const keyAndValues = [];
    for (const key of keys) {
      let value = data[key];
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }

      const keyAndValue = key + '=' + value;
      keyAndValues.push(keyAndValue);
    }

    if (keyAndValues.length === 0) {
      return '';
    }

    let questionChar = '?';
    if (isQuestionInclude === false) {
      questionChar = '';
    }

    return questionChar + keyAndValues.join('&');
  }

  /**
   * @description 요청 data 객체를 form data 형태로 반환하는 함수입니다.
   * @param {object} data 요청 data 입니다.
   * @returns {FormData}
   */
  getRequestDataToFormData(data) {
    const formData = new FormData();

    if (typeof data !== 'object') {
      return formData;
    }

    const keys = Object.keys(data);
    if (keys.length === 0) {
      return formData;
    }

    for (const key of keys) {
      formData.append(key, data[key]);
    }

    // console.log('getRequestDataToFormData().data', data);

    return data;
  }

  /**
   * @description XMLHttpRequest 값을 받아 여러 응답에 대한 값들을 객체로 반환하는 함수입니다.
   * @param {XMLHttpRequest} http 
   * @returns {Response}
   */
  getResponseObject(http) {
    return {
      status: http.status,
      statusText: http.statusText,
      response: http.response,
    };
  }
}
