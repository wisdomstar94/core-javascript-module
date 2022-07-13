import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-d3-deviation-function/
// https://github.com/d3/d3-array#deviation

window.addEventListener('load', async() => {  
  /*
    d3.deviation 은 주어진 허용 가능한 숫자의 치우침 수정 분산의 제곱근으로 정의된 표준 편차를 반환합니다. 
    반복 가능한 숫자가 두 개 미만인 경우 정의되지 않은 값을 반환합니다. 
    표준 편차를 계산하기 전에 Array.를 호출하는 것과 같은 선택적 접근자 함수를 지정할 수 있습니다. 
    이 방법은 정의되지 않은 값과 NaN 값을 무시하며 결측 데이터를 무시하는 데 유용합니다.
  */

  // initialising the array of elements
  const array1 = [10, 20, 30, 40, 50, 60];
  const array2 = [1, 2];
  const array3 = [0, 1.5, 6.8];
  const array4 = [.8, .08, .008];

  console.log('array1', array1);
  console.log('array2', array2);
  console.log('array3', array3);
  console.log('array4', array4);

  // Calling to d3.deviation() function
  console.log(`d3.deviation(array1)`, d3.deviation(array1));
  console.log(`d3.deviation(array2)`, d3.deviation(array2));
  console.log(`d3.deviation(array3)`, d3.deviation(array3));
  console.log(`d3.deviation(array4)`, d3.deviation(array4));
});
