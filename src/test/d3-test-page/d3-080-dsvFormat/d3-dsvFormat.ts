import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-dsv#dsvformat
// https://runebook.dev/ko/docs/d3/d3-dsv

window.addEventListener('load', async() => {  
  /*
    d3.dsvFormat 지정된 구분 기호에 대해 새 DSV 구문 분석기와 포맷터를 구성합니다. 
    구분 기호는 단일 문자(즉, 단일 16비트 코드 단위)여야 하므로 ASCII 구분 기호는 괜찮지만 이모티콘 구분 기호는 그렇지 않습니다.
  */

  const psv = d3.dsvFormat(',');
  const data = psv.parse(`x,y,name
10,3,apple
20,6,banana
30,9,melon
40,12,kiwi
50,15,grape`);
  console.log('data', data);
});
