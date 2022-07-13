import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvebundle-method/
// https://github.com/d3/d3-shape#curveBundle

export declare namespace ID3CurveBundle {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    d3.curveBundle 는 곡선의 베타에 따라 직선화된 스플라인(기본값은 0.85)으로 지정된 제어점을 사용하여 직선화된 3차 기준 스플라인을 생성합니다.
    d3.curveBundle 은 line 과 함께 사용되며, area 과 같이 사용될 수는 없습니다.
  */

  const data: ID3CurveBundle.Data[] = [
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

  /* Line */
  const lineGenerator = d3.line<ID3CurveBundle.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveBundle)
  ;

  const svg1 = d3.select('svg.svg-1');

  svg1
    .append("path")
    .attr("d", lineGenerator(data))
    .attr("fill", "green")
    .attr("stroke", "black")
  ;
});
