import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-d3-cubehelix-function/

window.addEventListener('load', async() => {
  /*
    d3.cubehelix() 함수 는 새로운 Cubehelix 색상을 구성하는 데 사용되며 함수의 매개변수로 사용되는 지정된 색상의 HSL 속성을 반환합니다.
  */

  const color1 = d3.cubehelix("red");
  const color2 = d3.cubehelix("green");
  const color3 = d3.cubehelix("blue");
  const color4 = d3.cubehelix("#2ecb66");
  const color5 = d3.cubehelix("rgba(20,94,204,0.5)");
  
  // Getting the HSL properties
  console.log(`color1`, color1);
  console.log(`color2`, color2);
  console.log(`color3`, color3);
  console.log(`color4`, color4);
  console.log(`color5`, color5);
});
