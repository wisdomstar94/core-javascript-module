import * as d3 from 'd3';

// 
window.addEventListener('load', async() => {  
  /*
    d3.filter 는 주어진 테스트 함수가 true를 반환하는 iterable의 값을 순서대로 포함하는 새 배열을 반환합니다. 
    array.filter 와 동일합니다.
  */
  
  const arr = [
    { name: 'hi', age: 3 },
    { name: 'hello', age: 6 },
    { name: 'good', age: 8 },
  ];
  console.log(`arr`, arr);

  const newArr = d3.filter(arr, (value, index) => {
    return value.age % 3 === 0;
  });

  console.log(`newArr`, newArr);
});
