// https://github.com/d3/d3-zoom#ZoomTransform_

window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  const commonCanvas = CommonCanvas({ canvas: canvas });
  commonCanvas.getCanvas().width = w;
  commonCanvas.getCanvas().height = h;

  const selection = d3.select('.box');

  const transform = new d3.ZoomTransform(0.4, 100, 100); // k, x, y
  console.log('transform', transform);
  console.log('transform.toString()', transform.toString());
  document.querySelector('.box').style.transform = "translate(" + transform.x + "px," + transform.y + "px) scale(" + transform.k + ")"

  commonCanvas.setDrawText({
    text: '테스트 입니다.',
    point: [200, 200],
    fillStyle: '#000',
    fontStyle: '12px serif',
  });

  // commonCanvas.getContext().translate()

  document.querySelector('.box').appendChild(canvas);
});

