import * as d3 from 'd3';

// https://observablehq.com/@d3/d3-bisect

window.addEventListener('load', function() {
  /*
    d3.bisect 함수는 숫자로 이루어진 배열에서
    인자로 받은 숫자가 들어가기 좋은 인덱스를 계산하여 반환해준다.
  */

  const cents = d3.ticks(0, 5, 100);
  console.log('cents', cents);

  const index = d3.bisect(cents, Math.PI);
  console.log('index', index);

  const index2 = d3.bisect(cents, Math.PI, 70, 80); // 최소 70 인덱스와 최대 80 인덱스 사이에서 찾겠다는 의미.
  console.log('index2', index2);
});

