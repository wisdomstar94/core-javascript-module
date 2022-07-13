import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-area-method/
// https://observablehq.com/@d3/d3-scalelinear

interface Data {
  x: number;
  y: number;
}

window.addEventListener('load', function() {
  example1();
  // example2();
});

function example2() {
  const scaleConverter = d3.scaleLinear()
    .domain([0, 100]) 
    .range([0, 1000]) 
  ;

  /*
    반환되는 d3.ScaleLinear 에 인자는 domain 값이 들어가고 반환되는 값은 range 임.
    즉, scaleLinear 는 domain 을 입력 받아 range 를 반환하는 역할을 함.
  */

  console.log(`scaleConverter(0)`, scaleConverter(0)); // -> 0
  console.log(`scaleConverter(50)`, scaleConverter(50)); // -> 500
  console.log(`scaleConverter(100)`, scaleConverter(100)); // -> 1000
}

function example1() {
  const data: Data[] = [
    {x: 0, y: 20},
    {x: 10, y: 15},
    {x: 20, y: 50},
    {x: 30, y: 35},
    {x: 40, y: 70},
    {x: 50, y: 115},
    {x: 60, y: 89},
    {x: 90, y: 60},
    {x: 125, y: 15},
  ];

  // data.sort((a, b) => a.y - b.y);
  console.log('data', data);

  // const xScale = d3.scaleLinear().domain([0, 6]).range([25, 175]);
  // const yScale = d3.scaleLinear().domain([0, 20]).range([175, 25]);

  const area = d3.area<Data>()
    .x(d => d.x) // 좌표의 x 값
    .y0(50) // 영역을 그리는 y 축의 기준 값 (이 축을 기준으로 상, 하 영역이 구분됨.)
    .y1(d => d.y) // 좌표의 y 값
  ; 

  d3.select("svg")
    .append("path")
    .attr("d", area(data))
    .attr("fill", "green")
    .attr("stroke", "black");
}