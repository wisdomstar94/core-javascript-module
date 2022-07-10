import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.csvParseRows 함수는 csv 포맷의 데이터를 행마다 배열로 변환해주는 함수입니다. 단순 value 에 ,(쉼표) 을 기준으로 배열로 반환됩니다.
  */
  const csvParseRows = d3.csvParseRows(`
name,price
apple,"70,000"
melon,"35,300"
`.trim());
  console.log('csvParseRows');
  console.log(csvParseRows);
  /*
    0: (2) ['name', 'price']
    1: (2) ['apple', '70,000']
    2: (2) ['melon', '35,300']
  */
});
