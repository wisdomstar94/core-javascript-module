import * as d3 from 'd3';

// http://using-d3js.com/08_02_dispatches.html

window.addEventListener('load', async() => {  
  /*
    d3.dispatch 는 커스텀 이벤트를 만들고 call 을 해올 수 있는 기능을 제공하는 함수입니다.
  */
  const myDispatch = d3.dispatch("event1", "event2");
  myDispatch.on('event1', function(args) {
    console.log('event1.args', args);
    console.log('event1.this', this); // 이벤트를 호출한 node 참조 가능.
  });
  myDispatch.on('event2', function(args) {
    console.log('event2.args', args);
    console.log('event2.this', this); // 이벤트를 호출한 node 참조 가능.
  });

  const svg = d3.select('svg');

  const rect1 = svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'fill: rgba(255, 0, 0)')
    .on("mouseenter", function() {
      console.log('rect1 mouseenter...');
      myDispatch.call("event1", this, { var1: 'hi' }); // 이벤트를 호출한 node 를 this 로 전달.
    })
  ;

  const rect2 = svg.append('rect')
    .attr('x', 150)
    .attr('y', 150)
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'fill: rgba(255, 0, 255)')
    .on("mouseenter", function() {
      console.log('rect2 mouseenter...');
      myDispatch.call("event2", this, { var2: 'hi 2' }); // 이벤트를 호출한 node 를 this 로 전달.
    })
  ;
});
