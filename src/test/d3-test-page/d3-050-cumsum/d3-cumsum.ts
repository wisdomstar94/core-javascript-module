import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-cumsum-method/
// https://observablehq.com/@d3/d3-cumsum

window.addEventListener('load', async() => {
  /*
    d3.cumsum 함수는 인자로 받은 배열의 모든 값의 누적 합계를 배열로 반환하는 함수입니다.
  */
  const array = [5, 4, 3, 2, 1];
  const gfg = d3.cumsum(array);
  console.log(`gfg`, gfg);
  /*
    0: 5   --> array[0] 부터 [0]까지 합한 값 == 5 
    1: 9   --> array[0] 부터 [1]까지 합한 값 == 5 + 4
    2: 12  --> array[0] 부터 [2]까지 합한 값 == 5 + 4 + 3
    3: 14  --> array[0] 부터 [3]까지 합한 값 == 5 + 4 + 3 + 2
    4: 15  --> array[0] 부터 [4]까지 합한 값 == 5 + 4 + 3 + 2 + 1
  */
});
