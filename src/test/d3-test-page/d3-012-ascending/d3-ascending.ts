import * as d3 from 'd3';

// https://observablehq.com/@d3/d3-ascending


window.addEventListener('load', function() {
  /*
    d3.ascending(a, b)

    -> a 가 b 의 앞이 맞는지 아닌지
    -> d3.ascending(a, b) === a > b
    -> a 가 b 보다 크면 1, 작으면 -1, 둘이 같은 값이면 0 이 반환됨
  */

  // 숫자 비교 가능
  console.log(`d3.ascending(8, 4)`, d3.ascending(8, 4));
  console.log(`d3.ascending(1, 4)`, d3.ascending(1, 4));

  // 문자열 비교 가능
  console.log(`d3.ascending('apple', 'banana')`, d3.ascending('apple', 'banana'));
  console.log(`d3.ascending('candy', 'banana')`, d3.ascending('candy', 'banana'));

  // boolean 비교 가능
  console.log(`d3.ascending(true, false)`, d3.ascending(true, false));
  console.log(`d3.ascending(false, true)`, d3.ascending(false, true));

  // date 비교 가능
  console.log(`d3.ascending(new Date(2017, 3, 1), new Date(2022, 4, 1))`, d3.ascending(new Date(2017, 3, 1), new Date(2022, 4, 1)));
  console.log(`d3.ascending(new Date(20202, 4, 1), new Date(2017, 3, 1))`, d3.ascending(new Date(2022, 4, 1), new Date(2017, 3, 1)));

  // 서로 다른 자료형이면 NaN 반환
  console.log(`d3.ascending('a', 3)`, d3.ascending('a', 3));

  /*
    Q. 그렇다면 왜 직접, < > 등의 비교 연산자를 사용하지 않고 d3.ascending 을 만들었을까?
    A. array.sort, d3.bisect, d3.quickselect 와 같은 서수 값을 조작하는 다양한 알고리즘에서 사용되는 특별한 함수 유형이기 때문.
  */

  // javascript === 비교 연산자로 같은 날짜라도 false 가 나오지만, d3.ascending 으로 비교하면 같다는 의미인 0 이 반환됨.
  console.log(`new Date(2022, 4, 1) === new Date(2022, 4, 1)`, new Date(2022, 4, 1) === new Date(2022, 4, 1));
  console.log(`d3.ascending(new Date(2022, 4, 1), new Date(2022, 4, 1))`, d3.ascending(new Date(2022, 4, 1), new Date(2022, 4, 1)));

  /*
    sort 함수에 사용하는 예제
  */
  console.log(`[3, 2, 5, 4, 1].sort(d3.ascending)`, [3, 2, 5, 4, 1].sort(d3.ascending)); // -> 오름차순으로 정렬됨.

  const peopleList = [
    { first: 'barry', last: 'eibb', },
    { first: 'maurice', last: 'cibb', },
    { first: 'anna', last: 'dibb', },
    { first: 'anna', last: 'zoo', },
    { first: 'anna', last: 'bom', },
    { first: 'vince', last: 'belouney', },
    { first: 'colin', last: 'atern', },
  ];
  console.log('peopleList', peopleList);

  const peopleListCopy = peopleList.slice();
  peopleListCopy
    .sort((a, b) => d3.ascending(a.first, b.first) || d3.ascending(a.last, b.last)) // 다중 정렬
  ;
  console.log('peopleListCopy', peopleListCopy);
});

