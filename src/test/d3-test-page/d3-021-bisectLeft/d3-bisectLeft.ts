import * as d3 from 'd3';

// https://observablehq.com/@d3/d3-bisect
// https://www.geeksforgeeks.org/d3-js-d3-bisectleft-function/

window.addEventListener('load', function() {
  /*
    d3.bisectLeft 함수는 숫자로 이루어진 배열에서
    인자로 받은 숫자와 가장 가까운 숫자가 위치한 인덱스를 계산하여 반환해준다.

    만약 배열이 아래와 같이 있다고 하고, 
    숫자 5 와 가장 가까운 숫자가 위치한 인덱스를 계산한다고 한다면

    [ 4, 5, 5, 5, 6, 7 ]
         †
        이 인덱스가 반환된다.

    숫자가 똑같다면 bisectLeft 는 가장 처음에 발견된 숫자의
    인덱스를 반환하고, bisect 는 가장 마지막으로 발견된 숫자의 그 다음 인덱스를 반환한다.
  */

  const cents = [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8];
  console.log('cents', cents);

  const index = d3.bisect(cents, 5);
  console.log('index', index);

  const index2 = d3.bisectLeft(cents, 5);
  console.log('index2', index2);

  console.log('cents', cents);
});

