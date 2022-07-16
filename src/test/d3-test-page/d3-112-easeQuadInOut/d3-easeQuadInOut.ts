import * as d3 from 'd3';

// https://observablehq.com/@d3/easing-animations

window.addEventListener('load', async() => {  
  /*
    d3.easeQuadInOut 는 transition 의 ease 종류중 하나입니다.
  */

  const svg = d3.select('svg');
  
  const circle = svg
    .append('g')
    .append('circle')
    .attr('r', 10)
    .attr('cx', 20)
    .attr('cy', 20)
    .attr('style', 'fill: #f00')
    .transition()
    .ease(d3.easeQuadInOut)
    .duration(1000)
    .attr('cx', 100)
  ;
});
