import * as d3 from 'd3';

// https://github.com/d3/d3-array/blob/v3.1.5/README.md#InternMap
// https://observablehq.com/d/d4c5f6ad343866b9

window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  canvas.width = w;
  canvas.height = h;

  // 그냥 javascript 의 new Map() 과 동일한 기능인 것 같으나, d3 에서 사용하는 용도로 따로 만든 듯 함.
  const d3Map = new d3.InternMap();
  console.log('d3Map', d3Map);
  d3Map.set('key1', 'val1');
  d3Map.set('key2', 2);
  console.log('d3Map', d3Map);

  d3Map.forEach((value, key) => {
    console.log(key, value);
  });

  console.log(`d3Map.get('key2')`, d3Map.get('key2'));
});
