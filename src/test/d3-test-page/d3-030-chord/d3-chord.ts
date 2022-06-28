import * as d3 from 'd3';

// https://github.com/d3/d3-chord
// https://observablehq.com/@d3/directed-chord-diagram
// https://www.geeksforgeeks.org/d3-js-chord-function/

window.addEventListener('load', async() => {
  var data = [
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907],
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
  ];

  const svg = d3.select('svg')
    .attr("width", 300)
    .attr("height", 300)
    .append("g")
    .attr("transform", "translate(150,150)")
  ;

  const chord = d3.chord()
    .padAngle(0.5)
    .sortGroups(d3.ascending)
    .sortSubgroups(d3.ascending)
    .sortChords(d3.ascending)
    (data)
  ;

  svg
    .datum(chord)
    .append("g")
    .selectAll("g")
    .data(function (d) { return d.groups; })
    .enter()
    .append("g")
    .append("path")
    .style("fill", "black")
    .style("stroke", "black")
    .attr("d", d3.arc().innerRadius(150).outerRadius(160) as any) 
  ;

  svg
    .datum(chord)
    .append("g")
    .selectAll("path")
    .data(function (d) { return d; })
    .enter()
    .append("path")
    .attr("d", d3.ribbon().radius(150) as any)
    .style("fill", "#32a852")
    .style("stroke", "black")
  ;
});

