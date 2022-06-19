class TestClass {
  apiUrl;
  apiCallback;

  constructor(options) {
    console.log('TestClass.options', options);
    this.apiUrl = options[this.getConstVariables().apiUrl];
    this.apiCallback = options[this.getConstVariables().apiCallback];

    console.log('this.apiUrl', this.apiUrl);
    console.log('tthis.apiCallback', this.apiCallback);
  }

  getConstVariables() {
    return {
      apiUrl: 'apiUrl',
      apiCallback: 'apiCallback'
    };
  }
}
