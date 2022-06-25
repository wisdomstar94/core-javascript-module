import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-axisbottom-function/

window.addEventListener('load', function() {
  /*
    d3.axisBottom 은 d3.AxisScale 타입의 데이터를 인자로 받아
    x 축의 데이터 수치를 그릴 때 사용하는 함수.

    d3.axisBottom 은 selection (context) 를 인자로 받는 함수를 반환함.
  */

  const width = 300;
  const height = 300;

  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  ;

  // d3.scaleLinear 은 d3-010-area 에서 한번 알아본 적이 있음.
  const xAxisScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width - 150])
  ;

  const xAxis = d3.axisBottom(xAxisScale);

  svg.append('g')
    .attr('transform', 'translate(20, 100)')
    .call(xAxis) // call 은 선택자가 여러개 선택되었더라도 인자로 받은 함수에 selection(context)를 넘기면서 단 한번만 호출함.
  ;
});

