import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-geo#geoalbersusa
// https://eric.clst.org/tech/usgeojson/

window.addEventListener('load', async() => {  
  /*
    d3.geoAlbersUsa
    => 이것은 3개의 d3.geoConicEqualArea 투영의 미국 중심 합성 투영입니다. 
       d3.geoAlbers 는 하위 48개 주에 사용되고 별도의 원뿔 등가 투영은 알래스카와 하와이에 사용됩니다. 
       알래스카의 축척은 축소되어 실제 상대 면적의 0.35배로 예상됩니다. 
       Philippe Rivière의 이 다이어그램은 이 투영이 알래스카와 하와이에 대해 두 개의 직사각형 삽입을 사용하는 방법을 보여줍니다.
  */
  const width = 800;
  const height = 400;

  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  ;

  const projection = d3.geoAlbersUsa()
    .scale(width)
    .translate([width / 2, height / 2])
  ;
  // const gfg = d3.geoAlbersUsa()
  //   .scale(width / 1.5 / Math.PI)
  //   .translate([width / 2, height])
  // ;

  const target = [
    './gz_2010_us_040_00_20m.json', // https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_20m.json
    './gz_2010_us_050_00_500k.json', // https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_500k.json
    './gz_2010_us_050_00_5m.json', // https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_5m.json
  ];

  const data: any = await d3.json(target[2]);
  svg.append("g")
    .selectAll("path")
    .data(data.features)
    .enter().append("path")
    // .attr("fill", "black")
    .attr("d", d3.geoPath().projection(projection) as any)
    .style("stroke", "#fff")
  ;
});
