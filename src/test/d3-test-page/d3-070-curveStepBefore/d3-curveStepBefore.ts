import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvestepbefore-method/
// https://github.com/d3/d3-shape#curveStepBefore

export declare namespace ID3CurveStepBefore {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    d3.curveStepBefore 는 수평선과 수직선으로 구성된 부분별 상수 함수(단계 함수)를 생성합니다. y-값은 x-값보다 먼저 변경됩니다.
  */

  const data: ID3CurveStepBefore.Data[] = [
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
  const areaGenerator = d3.area<ID3CurveStepBefore.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveStepBefore)
    ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveStepBefore.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveStepBefore)
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
