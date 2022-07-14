import * as d3 from 'd3';

// https://github.com/d3/d3-drag#drag

window.addEventListener('load', async() => {  
  /*
    d3.drag 는 
  */
  const svg = d3.select('svg');

  const drag = d3.drag<SVGRectElement, unknown, unknown>()
    .on('start', function(d) {
      const event: MouseEvent = d.sourceEvent;
      console.log('start', d);
      d3.select(this).raise().classed("active", true);
    })
    .on('drag', function(d) {
      const event: MouseEvent = d.sourceEvent;
      const subject = d.subject; // drag 가 시작된 좌표정보가 담긴 객체
      let x = Number(d3.select(this).attr('lx'));
      if (isNaN(x)) {
        x = 0;
      }
      let y = Number(d3.select(this).attr('ly'));
      if (isNaN(y)) {
        y = 0;
      }

      const xAddedValue = d.x - subject.x;
      const yAddedValue = d.y - subject.y;

      console.log('drag', d);
      d3.select(this).attr("x", x + xAddedValue).attr("y", y + yAddedValue);
    })
    .on('end', function(d) {
      const event: MouseEvent = d.sourceEvent;
      console.log('end');
      d3.select(this).attr('lx', d3.select(this).attr('x')).attr('ly', d3.select(this).attr('y'));
    })
  ;

  const rect1 = svg.append('rect')
    .attr('width', 100)
    .attr('height', 100)
    .attr('style', 'fill: rgba(255, 0, 0)')
    .call(drag)
  ;
});
