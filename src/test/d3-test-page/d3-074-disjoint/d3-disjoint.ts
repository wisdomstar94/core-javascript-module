import * as d3 from 'd3';

window.addEventListener('load', async() => {  
  /*
    d3.disjoint 는 두 개의 배열에서 서로 겹치는 요소가 없으면 true, 있으면 false 를 반환하는 함수입니다.
  */
  const arr1 = [1, 3, 4];
  const arr2 = [100, 200];

  console.log(`arr1`, arr1);
  console.log(`arr2`, arr2);

  const result = d3.disjoint(arr1, arr2);
  console.log(`result`, result);
});
