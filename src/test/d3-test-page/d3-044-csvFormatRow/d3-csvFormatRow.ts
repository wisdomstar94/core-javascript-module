import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.csvFormatRow 는 csv 데이터의 특정 row 에 해당하는 데이터를 csv 포맷으로 변환해 주는 함수입니다.
  */
  const csvFormatRow1 = d3.csvFormatRow(['name', 'price']);
  console.log('csvFormatRow1');
  console.log(csvFormatRow1); // name,price

  const csvFormatRow2 = d3.csvFormatRow(['apple', '1,000']);
  console.log('csvFormatRow2');
  console.log(csvFormatRow2); // apple,"1,000"

  const csvFormatRow3 = d3.csvFormatRow(['banana', '75,300']);
  console.log('csvFormatRow3');
  console.log(csvFormatRow3); // banana,"75,300"
});
