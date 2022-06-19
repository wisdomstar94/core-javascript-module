import * as d3 from 'd3';

// https://github.com/d3/d3-zoom#ZoomTransform_

window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  const context = canvas.getContext('2d');
  canvas.width = w;
  canvas.height = h;

  const transform = new d3.ZoomTransform(0.8, 100, 100); // k, x, y
  console.log('transform', transform);
  console.log('transform.toString()', transform.toString());
  const boxElement = document.querySelector<HTMLElement>('.box');
  if (boxElement !== null) {
    boxElement.style.transform = "translate(" + transform.x + "px," + transform.y + "px) scale(" + transform.k + ")";
  }

  if (context !== null) {
    context.font = '12px serif';
    context.fillText('테스트 입니다.', 200, 200);
    context.fillStyle = '#000';
  }

  document.querySelector<HTMLElement>('.box')?.appendChild(canvas);
});

