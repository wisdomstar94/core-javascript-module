import * as d3 from 'd3';

// https://runebook.dev/en/docs/d3/d3-brush
// https://www.geeksforgeeks.org/d3-js-brush-function/

window.addEventListener('load', async() => {
  /*
    d3.brushY 는 주로 call 함수의 인자로 넘겨지면서 사용되며,
    마우스로 드래그 할 시 특정 영역이 y축 으로만
    생성되고 해당 영역을 크기조정 및 이동할 수 있게 해주는 
    기능을 제공함.

    d3.brushY().extend() : 브러쉬 할 수 있는 영역을 제한함.
    d3.brushY().on("brush") : 브러쉬 될 때 마다 호출되는 콜백함수.
  */

  d3
    .select('svg')
    .append("g")
    .attr("class", "brush")
    .call(d3.brushY().on("brush", (e) => {
      console.log('e', e);
    }))
    ;
});

