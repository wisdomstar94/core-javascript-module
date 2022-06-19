window.addEventListener('load', function() {
  console.log('...');

  const aa = new TestClass({
    apiUrl: 'https://www.sample.url/',
    apiCallback: function() {
      console.log('apiCallback');
    },
  });
});
