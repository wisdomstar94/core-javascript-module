import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-array#flatrollup
// https://observablehq.com/@d3/d3-flatgroup

window.addEventListener('load', async() => {  
  /*
    d3.flatRollup 는 롤업과 동일하지만 중첩된 맵 대신 [key0, key1, …, value]의 플랫 배열을 반환합니다.
    d3.flatRollup 은 d3.flatGroup 와 달리, 반환되는 원래 요소를 커스텀할 수 있습니다.
  */
  
    const data = [
      { name: 'name1', age: 11, },
      { name: 'name2', age: 12, },
      { name: 'name3', age: 13, },
      { name: 'name4', age: 14, },
      { name: 'name5', age: 15, },
    ];
    console.log('data', data);
  
    const flatRollup = d3.flatRollup(data, v => v, d => d.name, d => d.age, ); // (data[0] 요소인 경우) => [ 'name1', 'zzzz', 11, [{ name: 'name1', age: 11, }] ] 으로 반환됨.
    console.log(`flatRollup`, flatRollup);
});
