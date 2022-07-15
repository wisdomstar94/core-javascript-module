import * as d3 from 'd3';

// https://github.com/d3/d3-drag#drag

window.addEventListener('load', async() => {  
  /*
    d3.dragEnable 은 지정된 창에서 기본 끌어서 놓기와 텍스트 선택을 허용합니다. 
    d3.dragDisable의 효과를 취소합니다. 이 메서드는 마우스 업에서 호출되고 마우스 다운에서 d3.dragDisable 이 앞에 나옵니다.
  */

  d3.dragDisable(window);

  const svg = d3.select('svg');

  const rect1 = svg.append('rect')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'fill: rgba(255, 0, 0)')
    .on('click', function(e) {
      d3.dragEnable(window);
    })
  ;
});
