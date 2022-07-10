import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.csvFormatRows 는 배열 데이터를 csv 포맷으로 변환해 주는 함수입니다.
  */
  const csvFormatRows = d3.csvFormatRows([
    ['name', 'price'], 
    ['apple', '1,000'], 
    ['banana', '75,300']
  ]);
  console.log('csvFormatRows');
  console.log(csvFormatRows);
});
