import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-brushselection-function/

window.addEventListener('load', async() => {
  /*
    d3.brushSelection 함수는 
    현재 brush 로 그려진 영역에 대한 좌표 정보를
    반환하는 함수임.
  */

  d3
    .select('svg')
    .append("g")
    .attr("class", "brush")
    .call(d3.brush().on("brush", function(e) {
      // console.log(`on("brush").e`, e);
      const selection = d3.brushSelection(this);
      console.log(`on("brush").selection`, selection);
    }))
    ;
});

