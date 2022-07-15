import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-fetch#dsv

window.addEventListener('load', async() => {  
  /*
    d3.dsv 는 지정된 입력 URL에서 DSV 파일을 가져옵니다.
    즉, csv 를 parse 하는 함수입니다.
  */

  const data = await d3.dsv(',', './sample.csv', (d) => {
    return {
      x: d.x,
      y: d.y,
      name: d.name,
    };
  });

  console.log('data', data);
});
