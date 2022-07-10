import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.csvFormatBody 는 데이터를 csv 포맷으로 변환은 하되 타이틀 부분은 제외하여 반환
  */

  const data1 = [
    { name: "apple", price: "2,000" }, 
    { name: "melon", price: "7,500" },
  ];
  console.log('data1', data1);
  const data1ToCsvBody = d3.csvFormatBody(data1);
  console.log('data1ToCsvBody');
  console.log(data1ToCsvBody);
});
