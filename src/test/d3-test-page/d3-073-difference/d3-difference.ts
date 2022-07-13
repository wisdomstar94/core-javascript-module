import * as d3 from 'd3';

window.addEventListener('load', async() => {  
  /*
    d3.difference 는 다른 반복 테이블에 없는 반복 가능한 모든 값을 포함하는 새 InterSet을 반환합니다.
  */
  const array1 = [1, 900, 3, 400, 5, 600, 7, 8];

  const newArray = d3.difference(array1, [900], [5, 7]); // array1 에서 900 과 5, 7 이 제거된 배열이 반환됩니다.
  console.log(`newArray`, newArray);
});
