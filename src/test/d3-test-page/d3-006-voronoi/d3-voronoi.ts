import * as d3 from 'd3';

window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  canvas.width = w;
  canvas.height = h;

  const pointsData = [
    { x: 14, y: 23 }, 
    { x: 100, y: 100 }, 
    { x: 30, y: 250 },
    { x: 222, y: 65 },
    { x: 301, y: 274 },
    { x: 274, y: 288 },
    { x: 274, y: 351 },
    { x: 300, y: 300 },
    { x: 400, y: 380 },
  ];


  // d3-delaunay 의 다른 적용 방식임. d3-delaunay 을 참조할 것.
  console.log('d3.Voronoi', d3.Voronoi);
  // const voronoi = new (d3.Voronoi as any)();

  // d3-Voronoi 는 contructor 에 인자를 넘겨야 하는데, 왜인지 모르지만 @type 에는 인자가 정의되어 있지 않음.. 그래서 우선 as any 를 붙임..
  const voronoi = new (d3.Voronoi as any)(
    d3.Delaunay.from(
      pointsData, 
      (d) => {
        // x 좌표에 해당하는 값 리턴
        return d.x;
      },
      (d) => {
        // y 좌표에 해당하는 값 리턴
        return d.y;
      },
    ), 
    [0, 0, 400, 400],
  );
  console.log('voronoi', voronoi);
});

