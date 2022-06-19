import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-arearadial-method/
// https://runebook.dev/ko/docs/d3/d3-shape

interface Point {
  x: number;
  y: number;
}

window.addEventListener('load', function() {
  example1();
});

function example1() {
  const points: Point[] = [
    { x: 10, y: 100 },
    { x: 90, y: 100 },
    { x: 100, y: 100 },
    
    // { x: 20, y: 0 },
    // { x: 30, y: 0 },
    // { x: 40, y: 0 },
    // { x: 50, y: 0 },
  ];

  const gen = d3.areaRadial<Point>()
    .angle(d => d.x)
    .startAngle(d => d.x + 10)
    .endAngle(d => d.y)
    .innerRadius(d => d.y / 3)
    .outerRadius(d => d.y)
  ;

  d3.select("svg")
    .append("g")
    .attr("transform", "translate(100, 100)")
    .append("path")
    .attr("d", gen(points))
    .attr("fill", "green")
    .attr("stroke", "black");
}