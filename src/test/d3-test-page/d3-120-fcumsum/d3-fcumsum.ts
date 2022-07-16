import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-array#fcumsum
// https://runebook.dev/ko/docs/d3/d3-array

window.addEventListener('load', async() => {  
  /*
    d3.fcumsum 는 지정된 값의 전체 정밀도 누적 합계를 반환합니다.
  */
  const arr = [1, 2.5, 7.3, 10];
  const fcumsum = d3.fcumsum(arr);
  console.log(`fcumsum`, fcumsum);
  /*
    0: 1     ==> arr[0]
    1: 3.5   ==> arr[0] + arr[1]
    2: 10.8  ==> arr[0] + arr[1] + arr[2]
    3: 20.8  ==> arr[0] + arr[1] + arr[2] + arr[3]
  */
});
