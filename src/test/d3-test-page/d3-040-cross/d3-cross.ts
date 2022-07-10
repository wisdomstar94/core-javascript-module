import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-d3-cross-function/

window.addEventListener('load', async() => {
  /*
    d3.coross 는 2 개의 배열을 받아 2개 배열의 숫자를 조합하여 나올 수 있는 모든 경우의 수에 해당하는 값을 반환해주는 함수입니다.
  */

  const array1 = [10, 20, 30];
  const array2 = [1, 2, 3];

  const crossArray = d3.cross(array1, array2);

  console.log('crossArray', crossArray);
  /*
    0: (2) [10, 1]
    1: (2) [10, 2]
    2: (2) [10, 3]
    3: (2) [20, 1]
    4: (2) [20, 2]
    5: (2) [20, 3]
    6: (2) [30, 1]
    7: (2) [30, 2]
    8: (2) [30, 3] 
  */
});
