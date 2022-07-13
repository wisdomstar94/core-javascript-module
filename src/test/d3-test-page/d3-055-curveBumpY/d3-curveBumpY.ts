import * as d3 from 'd3';

// https://github.com/d3/d3-shape/blob/main/README.md#curveBumpY
// https://tympanus.net/codrops/2022/03/29/building-an-interactive-sparkline-graph-with-d3/

export declare namespace ID3CurveBumpY {
  export interface Data {
    x: number;
    y: number;
  }
}

window.addEventListener('load', async() => {
  /*
    ※ 베지에 곡선: "베지에 곡선"이란 선분 위를 일정 속도로 움직이는 점과 그러한 점과 점을 잇는 또 다른 선분, 
                    그리고 그 위를 일정 속도로 이동하는 또 다른 점 등을 조합해 최종적으로 특정 점이 그리는 궤적을 이용해 곡선을 그려내는 방법을 뜻한다.

    d3.curveBumpY 은 각 점에 수직 접선이 있는 각 점 쌍 사이에 베지어 곡선을 생성합니다.
  */

  const data: ID3CurveBumpY.Data[] = [
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
  const areaGenerator = d3.area<ID3CurveBumpY.Data>()
    .x((d) => d.x)
    .y1((d) => 50)
    .y0((d) => d.y)
    .curve(d3.curveBumpY)
  ;

  /* Line */
  const lineGenerator = d3.line<ID3CurveBumpY.Data>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveBumpY)
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
