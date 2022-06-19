/**
 * @typedef DrawCircleOptions
 * @property {number[]} point [x, y] 원의 중심 좌표
 * @property {string} fillColor
 * @property {string} strokeColor
 * @property {number} radius 반지름
 * @property {CanvasContextType=} canvasContextType
 */

/**
 * @typedef DrawTextOptions
 * @property {number[]} point [x, y] Text 가 표시되기 시작할 좌표
 * @property {string} fontStyle font size 및 font 글꼴 설정. ex) 20px serif
 * @property {string} fillStyle text 색상 지정. ex) #000, rgba(0, 0, 0, 0.7)
 * @property {string} text 표시될 텍스트
 * @property {CanvasContextType=} canvasContextType
 */

/**
 * @typedef DrawStrokeOptions
 * @property {number[][]} points [[x1, y1], [x2, y2], ...] 좌표 배열
 * @property {string} strokeColor 선 색상
 * @property {string=} fillColor 채우기 색상
 */

/**
 * @typedef DrawPath2DOptions
 * @property {string} path2dString
 * @property {string} strokeColor
 */

/**
 * @typedef CanvasContextType
 * @type {'2d' | '3d'}
 */



const CommonCanvas = ((c_options) => {
  let canvas = document.createElement('canvas');
  let defaultCanvasContextType = '2d';
  if (typeof c_options === 'object') {
    if (c_options.canvas !== undefined) {
      canvas = c_options.canvas;
    }
  }

  /**
   * @param {HTMLCanvasElement} o_canvas 
   */
  const setCanvas = (o_canvas) => {
    canvas = o_canvas;
  };

  /**
   * @returns {HTMLCanvasElement}
   */
  const getCanvas = () => {
    return canvas;
  };

  /**
   * @param {CanvasContextType} type 
   * @returns {RenderingContext | null}
   */
  const getContext = (type) => {
    if (typeof type !== 'string') {
      type = '2d';
    }
    return canvas.getContext(type);
  };

  /**
   * @param {CanvasContextType} o_defaultCanvasContextType 
   */
  const setDefaultCanvasContextType = (o_defaultCanvasContextType) => {
    defaultCanvasContextType = o_defaultCanvasContextType;
  };

  /**
     * @param {DrawCircleOptions} options 
     */
  const setDrawCircle = (options) => {
    if (typeof options !== 'object') {
      console.error('options 을 입력해주세요.');
      return;
    }

    if (!Array.isArray(options.point)) {
      console.error('point(좌표) 를 입력해주세요.');
      return;
    }

    if (typeof options.point[0] !== 'number' || typeof options.point[1] !== 'number') {
      console.error('좌표 값 중에 숫자가 아닌 값이 존재합니다.');
      return;
    }

    if (typeof options.radius !== 'number') {
      console.error('반지름 값을 입력해주세요.');
      return;
    }

    if (typeof options.strokeColor !== 'string') {
      console.error('선 색을 입력해주세요.');
      return;
    }

    if (typeof options.fillColor !== 'string') {
      console.error('채울 색을 입력해주세요.');
      return;
    }

    const context = getContext(typeof options.canvasContextType === 'string' ? options.canvasContextType : defaultCanvasContextType);
    context.beginPath();

    context.arc(options.point[0], options.point[1], options.radius, 0, Math.PI * 2);
    context.strokeStyle = options.strokeColor;
    context.stroke();
    context.fillStyle = options.fillColor;
    context.fill();
    
    context.closePath();
  };

  /**
   * @param {DrawTextOptions} options 
   */
  const setDrawText = (options) => {
    if (typeof options !== 'object') {
      console.error('options 을 입력해주세요.');
      return;
    }

    if (!Array.isArray(options.point)) {
      console.error('point(좌표) 를 입력해주세요.');
      return;
    }

    if (typeof options.point[0] !== 'number' || typeof options.point[1] !== 'number') {
      console.error('좌표 값 중에 숫자가 아닌 값이 존재합니다.');
      return;
    }

    if (typeof options.fontStyle !== 'string') {
      console.error('글씨 스타일(크기, 글꼴)을 입력해주세요.');
      return;
    }

    if (typeof options.fillStyle !== 'string') {
      console.error('글씨 색상을 입력해주세요.');
      return;
    }

    if (typeof options.text !== 'string') {
      console.error('글씨를 입력해주세요.');
      return;
    }

    const context = getContext(typeof options.canvasContextType === 'string' ? options.canvasContextType : defaultCanvasContextType);
    context.font = options.fontStyle;
    context.fillText(options.text, options.point[0], options.point[1]);
    context.fillStyle = options.fillStyle;
  };

  /**
   * @param {DrawStrokeOptions} options 
   */
  const setDrawStroke = (options) => {
    if (typeof options !== 'object') {
      console.error('options 을 입력해주세요.');
      return;
    }

    if (!Array.isArray(options.points)) {
      console.error('points 를 입력해주세요.');
      return;
    }

    for (const point of options.points) {
      if (typeof point[0] !== 'number' || typeof point[1] !== 'number')  {
        console.error('points 에 담긴 좌표값 중 숫자가 아닌 좌표값이 존재합니다.');
        return;
      }
    }

    if (typeof options.strokeColor !== 'string') {
      console.error('strokeColor 를 입력해주세요.');
      return;
    }

    if (typeof options.fillColor !== 'string') {
      options.fillColor = 'rgba(255, 255, 255, 0)';
    }

    const context = getContext();
    context.beginPath();
    context.strokeStyle = options.strokeColor;
    options.points.forEach((point, index) => {
      if (index === 0) {
        context.moveTo(point[0], point[1]);
      } else {
        context.lineTo(point[0], point[1]);
      }
    });
    context.stroke();
    context.fillStyle = options.fillColor;
    context.fill();
    context.closePath();
  };

  /**
   * @param {DrawPath2DOptions} options 
   */
  const setDrawPath2D = (options) => {
    if (typeof options !== 'object') {
      console.error('options 을 입력해주세요.');
      return;
    }

    if (typeof options.path2dString !== 'string') {
      console.error('path2dString 를 입력해주세요.');
      return;
    }

    if (typeof options.strokeColor !== 'string') {
      console.error('strokeColor 를 입력해주세요.');
      return;
    }

    const context = getContext();
    context.beginPath();
    context.strokeStyle = options.strokeColor;
    context.stroke(new Path2D(options.path2dString));
    context.closePath();
  };

  return {
    setCanvas: setCanvas,
    getCanvas: getCanvas,

    getContext: getContext,
    
    setDefaultCanvasContextType: setDefaultCanvasContextType,
    setDrawCircle: setDrawCircle,
    setDrawText: setDrawText,
    setDrawStroke: setDrawStroke,
    setDrawPath2D: setDrawPath2D,
  };
});
