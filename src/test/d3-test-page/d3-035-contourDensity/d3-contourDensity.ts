import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-contourdensity-function/
// https://observablehq.com/@d3/density-contours

export declare namespace IContourDensity {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  const data: IContourDensity.Data[] = [
    { x: 11.45, y: 14.2, },
    { x: 11.1, y: 14.2, },
    { x: 11.9, y: 9.9, },
    { x: 11.6, y: 14.5, },
    { x: 11.1, y: 11.7, },
    { x: 14.7, y: 9.5, },
    { x: 7.9, y: 11.6, },
    { x: 14.7, y: 11.7, },
    { x: 11.45, y: 14.2, },
    { x: 12.1, y: 9.2, },
    { x: 7.5, y: 11, },
    { x: 14.5, y: 14.5, },
    { x: 11.45, y: 9.7, },
    { x: 14.45, y: 11.6, },
    { x: 11.5, y: 7.6, },
    { x: 11, y: 11.45, },
    { x: 14.7, y: 12, },
    { x: 11.7, y: 9.7, },
    { x: 9.6, y: 9, },
    { x: 12, y: 11, },
    { x: 11.45, y: 14.5, },
    { x: 11.11, y: 14.6, },
    { x: 12.7, y: 11.11, },
    { x: 11, y: 12.2, },
    { x: 11, y: 14.9, },
    { x: 9.5, y: 11.7, },
    { x: 11.7, y: 14.7, },
    { x: 11.9, y: 14.5, },
    { x: 14, y: 14.5, },
    { x: 7.11, y: 11, },
    { x: 11.11, y: 11.45, },
    { x: 11, y: 14.2, },
    { x: 14.7, y: 11.7, },
    { x: 14.5, y: 11.9, },
  ];

  const svg = d3.select("body")
    .append("svg")
    .attr("width", 530)
    .attr("height", 480)
    .append("g")
    .attr("transform", "translate(" + 40 + ", " + 0 + ")")
  ;

  const y = d3
    .scaleLinear()
    .domain([5, 30])
    .range([ 450, 10 ])
    ;

  const x = d3
    .scaleLinear()
    .domain([5, 22])
    .range([ 0, 460])
  ;

  svg
    .append("g")
    .call(d3.axisLeft(y))
  ;

  svg
    .append("g")
    .attr("transform","translate(0, " + 450 + ")")
    .call(d3.axisBottom(x))
  ;

  const densityData = d3
    .contourDensity<IContourDensity.Data>()
    .y(function(d) { return y(d.y); })
    .x(function(d) { return x(d.x); })(data)
  ;

  svg.selectAll("path")
    .data(densityData)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .attr("fill", "none")
    .attr("stroke", "green")
  ;
});

