import * as d3 from 'd3';

// https://github.com/d3/d3-chord
// https://observablehq.com/@d3/directed-chord-diagram
// https://www.geeksforgeeks.org/d3-js-chord-function/

window.addEventListener('load', async() => {
  var data = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [20, 30, 40, 50],
    [25, 35, 45, 55],
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

  console.log('chord', chord);

  svg
    .datum(chord)
    .append("g")
    .selectAll("g")
    .data(function (d) { 
      console.log('one.data.d.groups', d.groups);
      return d.groups; 
    })
    .enter()
    .append("g")
    .append("path")
    .style("fill", "black")
    .style("stroke", "black")
    .attr("d", d3.arc().innerRadius(140).outerRadius(160) as any) 
  ;

  svg
    .datum(chord)
    .append("g")
    .selectAll("path")
    .data(function (d) { 
      console.log('two.data.d', d);
      return d; 
    })
    .enter()
    .append("path")
    .attr("d", d3.ribbon().radius(150) as any)
    .style("fill", "#32a852")
    .style("stroke", "black")
  ;
});

