import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-creator-function/

window.addEventListener('load', async() => {
  /*
    d3.create 는 d3 관련 메소드 체이닝을 사용할 수 있지만,
    d3.creator 는 d3 관련 메소드 체이닝을 사용할 수 없다.
  */
  const text = d3
    .creator('text') // namespace 를 지정해 주어야 append 가 가능함.
  ;

  d3
    .select('svg')
    .append('g')
    .append(text);
  ;
});
