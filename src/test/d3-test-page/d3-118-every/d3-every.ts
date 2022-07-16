import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-array#every
// https://runebook.dev/ko/docs/d3/d3-array

window.addEventListener('load', async() => {  
  /*
    d3.every 는 지정된 테스트 함수가 지정된 값의 모든 값에 대해 true를 반환하는 경우 true를 반환합니다. 
    이 메서드는 검정이 사실이 아닌 값을 반환하거나 모든 값이 반복되면 즉시 반환됩니다. array.every와 동일합니다.

    배열의 모든 요소가 특정 조건을 충족하는지 확인하는 함수입니다.
  */

  const arr1 = [3, 6, 9];
  const arr1Check = d3.every(arr1, (value, index) => {
    return value % 3 === 0; // 여기서 단 한 번이라도 false 가 나오면 arr1Check 의 결과는 false 가 나옵니다.
  });
  console.log(`arr1Check`, arr1Check);

  const arr2 = [3, 6, 9, 10];
  const arr2Check = d3.every(arr2, (value, index) => {
    return value % 3 === 0; // 여기서 단 한 번이라도 false 가 나오면 arr2Check 의 결과는 false 가 나옵니다.
  });
  console.log(`arr2Check`, arr2Check);
});
