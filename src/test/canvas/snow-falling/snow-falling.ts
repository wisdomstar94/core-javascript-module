import Konva from 'konva';

window.addEventListener('load', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const stage = new Konva.Stage({
    container: 'canvas-container',
    width: width,
    height: height,
  });

  const layer = new Konva.Layer();

  const circle = new Konva.Circle({
    x: 15,
    y: 15,
    radius: 5,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 1,
  });

  // add the shape to the layer
  layer.add(circle);

  // add the layer to the stage
  stage.add(layer);

  const amplitude = 100;
  const period = 2000;
  const centerX = stage.width() / 2;
  const anim = new Konva.Animation(function(frame) {
    if (frame === undefined) {
      return;
    }
    circle.x(frame.time * 0.01);
  }, layer);
  anim.start();
});