
window.addEventListener('load', function() {
  console.log('1', new DateCustom(new Date()).format('YYYY-MM-DD HH:mm:ss'));
  console.log('2', new DateCustom(new Date()).format('YYYY-MM-LL HH:mm:ss'));
  console.log('3', new DateCustom(new Date()).add(3, 'hour').format('YYYY-MM-LL HH:mm:ss'));
});
