let scrollCheck1;
let scrollCheck2;
let scrollCheck3;

window.addEventListener('load', function() {
  // 특정 요소의 scroll 정보 체크
  scrollCheck1 = new ScrollCheck('.area-1', function(info) {
    /*
      [ info 값 예시 ]
      {
        clientHeight: 200
        isLastScrollArea: false
        scrollHeight: 250
        scrollTop: 7 
      }
    */
    console.log('1 info', info);
  });
  scrollCheck2 = new ScrollCheck('.area-2', function(info) {
    /*
      [ info 값 예시 ]
      {
        clientHeight: 200
        isLastScrollArea: false
        scrollHeight: 250
        scrollTop: 7 
      }
    */
    console.log('2 info', info);
  });


  
  // html의 scroll 정보 체크
  scrollCheck3 = new ScrollCheck(null, function(info) {
    /*
      [ info 값 예시 ]
      {
        clientHeight: 200
        isLastScrollArea: false
        scrollHeight: 250
        scrollTop: 7 
      }
    */
    console.log('3 info', info);
  });
});
