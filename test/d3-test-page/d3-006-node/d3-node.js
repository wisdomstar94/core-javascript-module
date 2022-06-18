window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  const commonCanvas = CommonCanvas({ canvas: canvas });
  commonCanvas.getCanvas().width = w;
  commonCanvas.getCanvas().height = h;

  // 함수이긴 한데.. 반환되는 것도 없고.. 인자에 node 값을 넣어도 반환되는 것이 없음..
  console.log(d3.Node);
  console.log(`d3.Node(d3.select('.box'))`, d3.Node(d3.select('.box').node()));
});

