import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvelinear-method/
// https://github.com/d3/d3-shape#curveLinear

export declare namespace ID3CurveLinear {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    ※ 폴리 라인 : 연속하는 직선, 호를 이용하여 선을 그리는 방식으로 객체의 수에 상관없이 하나의 객체로 인식되는 선

    d3.curveLinear 는 지정된 점을 통과하는 폴리 라인을 생성합니다.
  */

  const data: ID3CurveLinear.Data[] = [
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

  /* Area */
  const areaGenerator = d3.area<ID3CurveLinear.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveLinear)
    ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveLinear.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveLinear)
  ;

  const svg1 = d3.select('svg.svg-1');
  const svg2 = d3.select('svg.svg-2');

  svg1
    .append("path")
    .attr("d", areaGenerator(data))
    .attr("fill", "green")
    .attr("stroke", "black")
  ;

  svg2
    .append("path")
    .attr("d", lineGenerator(data))
    .attr("fill", "green")
    .attr("stroke", "black")
  ;
});
