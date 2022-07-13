import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-curvecardinalopen-method/
// https://github.com/d3/d3-shape#curveCardinalOpen

export declare namespace ID3CurveCardinalOpen {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    ※ 카디널 스플라인 : 더 큰 곡선을 형성하기 위해 조인된 개별 곡선의 시퀀스입니다.

    d3.curveCardinalOpen 는 3차 카디널 스플라인을 생성합니다. 
    곡선은 또한 이러한 3차 카디널 스플라인을 기반으로 합니다. 
    이것은 데이터 세트의 첫 번째와 마지막 지점을 생략하는 개방형 변형입니다.
  */

  const data: ID3CurveCardinalOpen.Data[] = [
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
  const areaGenerator = d3.area<ID3CurveCardinalOpen.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveCardinalOpen)
    ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveCardinalOpen.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveCardinalOpen)
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
