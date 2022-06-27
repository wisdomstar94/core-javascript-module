import * as d3 from 'd3';

// https://runebook.dev/en/docs/d3/d3-brush
// https://www.geeksforgeeks.org/d3-js-brush-function/
// https://observablehq.com/@d3/brush-transitions

window.addEventListener('load', async() => {
  /*
    d3.brush 는 주로 call 함수의 인자로 넘겨지면서 사용되며,
    마우스로 드래그 할 시 특정 영역이
    생성되고 해당 영역을 크기조정 및 이동할 수 있게 해주는 
    기능을 제공함.

    d3.brush().extend() : 브러쉬 할 수 있는 영역을 제한함.
    d3.brush().on("brush") : 브러쉬 될 때 마다 호출되는 콜백함수.
    d3.move : 브러쉬 영역을 특정 영역으로 이동시킴.
  */

  const brushed = function(selection: any) {
    console.log('brushed.selection', selection);
  };

  const brushended = function({sourceEvent, selection}) {
    console.log('brushended.sourceEvent', sourceEvent);
    console.log('brushended.selection', selection);
    if (!sourceEvent) return;
    d3.select(this).transition()
      .delay(100)
      .duration(selection ? 750 : 0)
      .call(brush.move, [[60, 60], [70, 70]]);
  };

  const brush = d3.brush()
    .on("start brush", ({selection}) => brushed(selection))
    .on("end", brushended)
    .extent([[50, 50], [200, 200]])
  ;

  d3
    .select('svg')
    .append("g")
    .attr("class", "brush")
    .call(brush)
  ;
});

