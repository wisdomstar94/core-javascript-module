// https://github.com/d3/d3-array/blob/main/README.md#InternSet

import * as d3 from 'd3';

window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  canvas.width = w;
  canvas.height = h;

  // javascript 의 Set 클래스와 동일한 기능을 하는 것 같음.
  const pocket = new d3.InternSet();

  pocket.add('value1');
  pocket.add('value2');
  // pocket.add('value1'); // 중복 값은 허용되지 않음! (데이터가 들어가지 않음)
  pocket.add(2022);

  console.log('pocket', pocket);
  console.log('pocket.size', pocket.size);
  console.log(`pocket.has(2021)`, pocket.has(2021));
  console.log(`pocket.has(2022)`, pocket.has(2022));

  pocket.forEach((value) => {
    console.log('value', value);
  });

  console.log(`==============================`);

  const jsSet = new Set();
  jsSet.add(new Date(2021, 4, 1));
  jsSet.add(new Date(2022, 3, 8));
  jsSet.add(new Date(2022, 3, 8));
  console.log(`jsSet`, jsSet);

  console.log(`==============================`);

  const d3InternSet = new d3.InternSet();
  d3InternSet.add(new Date(2021, 4, 1));
  d3InternSet.add(new Date(2022, 3, 8));
  d3InternSet.add(new Date(2022, 3, 8));
  console.log(`d3InternSet`, d3InternSet);
});
