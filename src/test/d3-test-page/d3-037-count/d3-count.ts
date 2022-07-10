import * as d3 from 'd3';

// https://observablehq.com/@d3/d3-count
// https://www.geeksforgeeks.org/d3-js-count-method/

export declare namespace ID3Count {
  export interface Data {
    name: string;
    amount: number | string;
    date: string;
  }
}

window.addEventListener('load', async() => {
  /*
    d3.count 는 일반적으로 데이터에 존재하는 유효한 요소의 수를 계산하는 데 사용됩니다.
  */

  const data: ID3Count.Data[] = [
    {name: "ABC", amount: 34.0, date: "11/12/2015"},
    {name: "DEF", amount: 120.11, date: "11/12/2015"},
    {name: "MNO", amount: 12.01, date: "01/04/2016"},
    {name: "ABC", amount: 34.0, date: "01/04/2016"},
    {name: "ABC", amount: 'hi', date: "01/04/2016"},
  ];
    
  const count = d3.count(data, d => d.amount as any); // 반환되는 값이 숫자형 데이터인 경우에 해당하는 것들만 카운팅됨.
  console.log('count', count);

  const count2 = d3.count(['1', 2, '3', 'hello', {}]); // 반환되는 값이 숫자형 데이터인 경우에 해당하는 것들만 카운팅됨.
  console.log('count2', count2);
});
