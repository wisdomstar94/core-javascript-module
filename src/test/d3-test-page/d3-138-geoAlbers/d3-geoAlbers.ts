import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-geo-projection#geoalbers
// https://www.geeksforgeeks.org/d3-js-geoalbers-function/

window.addEventListener('load', async() => {  
  /*
    d3.geoAlbers
    => Albers 등면적 원뿔 투영을 그리는 데 사용됩니다. 
       Heinrich C. Albers 의 이름을 따서 명명된 Albers 투영법은 두 개의 표준 평행선을 사용하는 원뿔형 동일 영역 지도 투영법입니다. 
       축척과 모양이 유지되지 않고 표준 평행선 사이의 왜곡이 최소화됩니다. 그것은 geojson 데이터에서 geoAlbers 투영을 그립니다.
  */
  
  const width = 800;
  const height = 400;

  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  ;

  const gfg = d3.geoAlbers()
    .scale(width / 1.5 / Math.PI)
    .translate([width / 2, height])
  ;

  const data: any = await d3.json("https://raw.githubusercontent.com/janasayantan/datageojson/master/geoasia.json");
  svg.append("g")
    .selectAll("path")
    .data(data.features)
    .enter().append("path")
    .attr("fill", "black")
    .attr("d", d3.geoPath().projection(gfg) as any)
    .style("stroke", "#ffff")
  ;
});
