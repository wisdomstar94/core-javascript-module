import * as d3 from 'd3';

// https://github.com/d3/d3-array/blob/v3.1.5/README.md#InternMap
// https://observablehq.com/d/d4c5f6ad343866b9
// https://github.com/mbostock/internmap

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
  d3Map.set(new Date(2022, 4, 1), 'date wow!');
  d3Map.set(['1', '2', '3'], 'array wow!');
  d3Map.set({ a: 'a' }, 'a wow!');
  console.log('d3Map', d3Map);

  d3Map.forEach((value, key) => {
    console.log('key', key);
    console.log('value', value);
  });

  console.log(`d3Map.get('key2')`, d3Map.get('key2'));
  console.log(`d3Map.get(new Date(2022, 4, 1))`, d3Map.get(new Date(2022, 4, 1)));
  console.log(`d3Map.get(['1', '2', '3'])`, d3Map.get(['1', '2', '3']));
  console.log(`d3Map.get({ a: 'a' })`, d3Map.get({ a: 'a' }));


  console.log(`==============================`);

  const jsMap = new Map();
  jsMap.set(new Date(2022, 7, 1), 'jsMap Data!');
  console.log(`jsMap.get(new Date(2022, 7, 1))`, jsMap.get(new Date(2022, 7, 1)));

  console.log(`==============================`);

  const d3InternMap = new d3.InternMap();
  d3InternMap.set(new Date(2022, 7, 1), 'd3InternMap Data!');
  console.log(`d3InternMap.get(new Date(2022, 7, 1))`, d3InternMap.get(new Date(2022, 7, 1)));

  {
    // console.log(`==============================`);

    // const d3InternMap3 = new d3.InternMap([
    //   [{a: 1}, 'hi'],
    //   [{a: 1}, 'zzzzz'],
    //   [{a: 3}, 'nnnnn'],
    // ], JSON.stringify);
    // console.log(`d3InternMap3`, d3InternMap3);
  }
});
