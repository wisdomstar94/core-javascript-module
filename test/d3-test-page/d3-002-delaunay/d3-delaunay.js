// https://runebook.dev/ko/docs/d3/d3-delaunay
// https://stackoverflow.com/questions/68694527/d3-js-d3-delaunay-how-to-get-started
// https://www.visualcinnamon.com/2015/07/voronoi/

window.addEventListener('load', function() {
  const w = 400;
  // const h = (w * 9) / 16;
  const h = 400;
  const canvas = document.createElement('canvas'); 
  const commonCanvas = CommonCanvas({ canvas: canvas });
  commonCanvas.getCanvas().width = w;
  commonCanvas.getCanvas().height = h;
  
  const pointsData = [
    { x: 14, y: 23 }, 
    { x: 100, y: 100 }, 
    // { x: 380, y: 20 }, 
    // { x: 200, y: 200 }, 
    { x: 30, y: 250 },
    { x: 222, y: 65 },
    { x: 301, y: 274 },
    { x: 274, y: 288 },
    { x: 274, y: 351 },
    // { x: 20, y: 380 },
    { x: 300, y: 300 },
    { x: 400, y: 380 },
  ];

  const delaunay = d3.Delaunay.from(
    pointsData, 
    (d) => {
      // x 좌표에 해당하는 값 리턴
      return d.x;
    },
    (d) => {
      // y 좌표에 해당하는 값 리턴
      return d.y;
    },
  );

  const voronoi = delaunay.voronoi([0, 0, 400, 400]); // x 좌표의 최소값, y 좌표의 최소값, x 좌표의 최대값, y 좌표의 최대값
  canvasContextDrawing(commonCanvas.getContext(), voronoi);
  document.querySelector(".box").appendChild(canvas);



  
  const renderPoints = getRenderPoints(voronoi);
  console.log('renderPoints', renderPoints);
  renderPoints.forEach((point, index) => {
    // 셀을 이루는 좌표마다 원을 표시하기
    commonCanvas.setDrawCircle({
      point: point,
      fillColor: '#f00', // red
      radius: 2,
      strokeColor: '#f00'
    });
  });

  pointsData.forEach((point, index) => {
    // 대상 좌표에 해당하는 셀 부분에 색칠하기
    const cellPolygon = voronoi.cellPolygon(index);
    const randomColor = d3.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255, 0.5);
    console.log('randomColor', randomColor);
    commonCanvas.setDrawStroke({
      points: cellPolygon,
      strokeColor: 'rgba(255, 255, 255, 0)',
      fillColor: `rgba(${randomColor.r}, ${randomColor.g}, ${randomColor.b}, ${randomColor.opacity})`,
    });
  });





  // console.log(`voronoi.circumcenters`, voronoi.circumcenters);
  // console.log(`voronoi.cellPolygon(1)`, voronoi.cellPolygon(1));
  // commonCanvas.setDrawStroke({
  //   points: voronoi.cellPolygon(1),
  //   strokeColor: '#000',
  //   fillColor: '#00f',
  // });


  console.log('delaunay.points', delaunay.points);
  console.log('delaunay.hull', delaunay.hull);
  console.log('delaunay.inedges', delaunay.inedges);
  console.log('delaunay.halfedges', delaunay.halfedges);
  console.log('delaunay.triangles', delaunay.triangles);
  console.log(`delaunay.trianglePolygons()`, delaunay.trianglePolygons());
  console.log(`delaunay.neighbors()`, delaunay.neighbors());
  console.log(`delaunay.renderHull()`, delaunay.renderHull());
  // commonCanvas.setDrawPath2D({
  //   path2dString: delaunay.renderHull(),
  //   strokeColor: '#0ff',
  // });

  console.log(`delaunay.renderTriangle()`, delaunay.renderTriangle(0));
  // commonCanvas.setDrawPath2D({
  //   path2dString: delaunay.renderTriangle(7),
  //   strokeColor: '#000',
  // });

  console.log(`delaunay.hullPolygon()`, delaunay.hullPolygon());
  // commonCanvas.setDrawStroke({
  //   points: delaunay.hullPolygon(),
  //   strokeColor: '#000',
  // });
  

  pointsData.forEach((value, index) => {
    commonCanvas.setDrawCircle({
      point: [value.x, value.y],
      radius: 2,
      strokeColor: '#000',
      fillColor: '#000',
    });

    commonCanvas.setDrawText({
      point: [value.x + 5, value.y],
      text: `(${value.x}, ${value.y})`,
      fillStyle: '#000',
      fontStyle: '12px serif',
    });

    // commonCanvas.setDrawStroke({
    //   points: delaunay.hullPolygon(),
    //   strokeColor: '#ff0',
    // });
  });
    



  

  
  console.log(`voronoi.contains(0, 21, 21)`, voronoi.contains(1, 201, 21));







  function canvasContextDrawing(context2, voronoi2) {
    context2.clearRect(0, 0, w, h);
    context2.fillStyle = "black";
    context2.beginPath();
    context2.fill();
    context2.lineWidth = 1.5;

    const segments = voronoi2.render().split(/M/).slice(1);
    for (const e of segments) {
      console.log('...e', e);
      context2.beginPath();
      context2.strokeStyle = d3.hsl(360 * Math.random(), 0.7, 0.5);
      context2.stroke(new Path2D("M" + e));
    }

    document.querySelector(".box").appendChild(canvas);
  }

  function getRenderPoints(voronoi2) {
    const returnPoints = [];

    const render = voronoi2.render();
    // console.log(`render`, render);
    const renderSplit = render.split('M');
    // console.log(`renderSplit`, renderSplit);
    for (const item of renderSplit) {
      const itemSplit = item.split('L');
      // console.log(`itemSplit`, itemSplit);
      for (const item2 of itemSplit) {
        const item2Split = item2.split(',').map(x => Number(x));
        // console.log(`item2Split`, item2Split);
        returnPoints.push(item2Split);
      }
    }

    returnPoints.splice(0, 1);
    return returnPoints;
  }
});
