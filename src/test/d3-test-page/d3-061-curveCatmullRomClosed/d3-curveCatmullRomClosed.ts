import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvecatmullromclosed-method/
// https://github.com/d3/d3-shape#curveCatmullRomClosed

export declare namespace ID3CurveCatmullRomClosed {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    d3.curveCatmullRomClosed 는 지정된 제어점과 매개변수 알파(기본값은 0.5)를 사용하여 닫힌 3차 Catmull-Rom 스플라인을 생성합니다. 
    선분이 끝나면 처음 세 개의 제어점이 반복되어 닫힌 루프를 생성합니다.
  */

  const data: ID3CurveCatmullRomClosed.Data[] = [
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
  const areaGenerator = d3.area<ID3CurveCatmullRomClosed.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveCatmullRomClosed)
    ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveCatmullRomClosed.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveCatmullRomClosed)
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
