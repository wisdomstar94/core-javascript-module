import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvecatmullrom-method/
// https://github.com/d3/d3-shape#curveCatmullRom

export declare namespace ID3CurveCatmullRom {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    d3.curveCatmullRom 은 지정된 제어점과 매개변수 알파(기본값은 0.5)를 사용하여 3차 Catmull-Rom 스플라인을 생성합니다. 
    Catmull-Rom 곡선의 매개변수화에서 첫 번째와 마지막 부분에 단측 차이가 사용되었습니다.
  */

  const data: ID3CurveCatmullRom.Data[] = [
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
  const areaGenerator = d3.area<ID3CurveCatmullRom.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveCatmullRom)
    ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveCatmullRom.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveCatmullRom)
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
