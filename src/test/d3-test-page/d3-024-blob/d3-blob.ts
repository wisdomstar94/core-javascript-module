import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.blob 함수는
    인자로 입력된 URL 에서 파일을 가져와 blob 타입을 반환하는
    Promise 를 반환하는 함수임.
  */

  const blob = await d3.blob('https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/b53c9e72-6b59-4cda-8c0c-7d6a51dad12a/download/sample.csv');
  console.log('blob', blob);
  console.log(`await blob.text()`, await blob.text());
});

