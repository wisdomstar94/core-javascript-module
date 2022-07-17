import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-array#fsum
// https://observablehq.com/@d3/d3-fsum

window.addEventListener('load', async() => {  
  /*
    d3.fsum
    => 주어진 값의 전체 정밀도 합계를 반환합니다.
       더 느리긴 하지만 d3.fsum 은 더 높은 정밀도가 필요한 곳에서 d3.sum 을 대체할 수 있습니다. d3.Adder 를 사용합니다.
  */
  console.log(`d3.fsum([1, 1e-14, -1])`, d3.fsum([1, 1e-14, -1]));
  console.log(`d3.fsum([.1, NaN, undefined, .1, .1, .1, .1, .1, .1, .1, .1, .1])`, d3.fsum([.1, NaN, undefined, .1, .1, .1, .1, .1, .1, .1, .1, .1]));
  console.log(`d3.fsum([{ a: 10 }, { a: 1 }, { a: 3 }], d => d.a)`, d3.fsum([{ a: 10 }, { a: 1 }, { a: 3 }], d => d.a));
  console.log(`d3.fsum([.1, .1, .1])`, d3.fsum([.1, .1, .1]));
});
