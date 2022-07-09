import * as d3 from 'd3';

// https://github.com/d3/d3-color

window.addEventListener('load', async() => {
  const c1 = d3.color('steelblue'); // {r: 70, g: 130, b: 180, opacity: 1}
  console.log(`c1`, c1);
  c1!.opacity = 0.3;
  console.log(`c1.toString()`, c1?.toString()); // css 에 적용할 수 있는 값이 반환됨.
  console.log(`c1.formatHex()`, c1?.formatHex()); // 색상값을 Hex 로 반환.

  const c2 = d3.color('#ff0000');
  console.log(`c2`, c2);
  console.log(`c2.toString()`, c2?.toString());
  console.log(`c2.formatHex()`, c2?.formatHex());

  const newC2 = c2?.darker(1.5);
  console.log(`c2.toString()`, c2?.toString()); // 기존 d3.ColorFactory 객체에는 영향 없음.
  console.log(`newC2.toString()`, newC2?.toString());
});

