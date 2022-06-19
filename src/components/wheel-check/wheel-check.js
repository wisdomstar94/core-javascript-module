let wheelCheck;

window.addEventListener('load', function() {
  wheelCheck = new WheelCheck('#box', function(info) {
    /*  
      [info 예시]
      {
        wheelDirection: "up"
      }
    */
    console.log('info', info);
  });
});
