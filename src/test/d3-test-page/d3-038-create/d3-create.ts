import * as d3 from 'd3';

// https://stackoverflow.com/questions/49999268/creating-and-appending-detached-elements-with-d3-create

window.addEventListener('load', async() => {
  const text = d3
    .create('svg:text') // namespace 를 지정해 주어야 append 가 가능함.
    .attr('x', 50)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px')
    .attr('fill', '#000')
    .text('안녕하세요')
  ;

  d3
    .select('svg')
    .append('g')
    .append(() => text.node());
  ;
});
