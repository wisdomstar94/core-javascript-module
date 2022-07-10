import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.csvParse 함수는 csv 포맷의 데이터를 js 데이터로 변환해주는 함수입니다. key - value 형태로 반환됩니다.
  */
  const csvParse = d3.csvParse(`
name,price
apple,"70,000"
melon,"35,300"
`.trim());
  console.log('csvParse');
  console.log(csvParse);
  /*
    0: {name: 'apple', price: '70,000'}
    1: {name: 'melon', price: '35,300'}
    columns: (2) ['name', 'price']
  */
});
