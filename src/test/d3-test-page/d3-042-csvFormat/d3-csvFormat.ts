import * as d3 from 'd3';

// https://github.com/d3/d3-dsv

window.addEventListener('load', async() => {
  /*
    d3.csvFormat 함수는 데이터를 csv 포맷형태로 변환해주는 함수입니다.
  */

  const data1 = [
    { name: "apple", price: "2,000" }, 
    { name: "melon", price: "7,500" },
  ];
  console.log('data1', data1);
  const data1ToCsv = d3.csvFormat(data1);
  console.log('data1ToCsv');
  console.log(data1ToCsv);
  /*
    name,price
    apple,"2,000"
    melon,"7,500"
  */
});
