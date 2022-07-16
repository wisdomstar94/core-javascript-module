import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-array#extent
// https://observablehq.com/@d3/d3-extent

window.addEventListener('load', async() => {  
  /*
    d3.extent 는 자연 순서를 사용하여 지정된 값의 최소값과 최대값을 반환합니다. 
    반복 테이블에 비교할 수 있는 값이 없으면 [정의되지 않음, 정의되지 않음]을 반환합니다. 
    익스텐트를 계산하기 전에 Array.를 호출하는 것과 같은 선택적 접근자 함수를 지정할 수 있습니다.
  */

  const arr = [100, 200, 300, 400, 500];
  const extent = d3.extent(arr);
  console.log(`extent`, extent); // 첫번째 인덱스에 최소값이, 두번째 인덱스에 최대값이 담깁니다.
});
