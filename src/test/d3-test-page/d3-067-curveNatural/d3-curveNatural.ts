import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvenatural-method/
// https://github.com/d3/d3-shape#curveNatural

export declare namespace ID3CurveNatural {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    d3.curveNatural 는 스플라인의 두 번째 도함수가 끝점에서 0으로 설정된 자연 입방체 스플라인을 생성합니다.
  */

  const data: ID3CurveNatural.Data[] = [
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
  const areaGenerator = d3.area<ID3CurveNatural.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveNatural)
    ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveNatural.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveNatural)
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
