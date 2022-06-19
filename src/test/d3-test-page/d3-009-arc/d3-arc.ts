import * as d3 from 'd3';

window.addEventListener('load', function() {
  const svgD3Instance = d3.select('svg').append("g");

  svgD3Instance.append("path")
    .attr("class", "arc")
    .attr("d", function(d) {
      return d3.arc()({
        innerRadius: 40,
        outerRadius: 60,
        startAngle: 0, // 호의 시작 각도, 12시 방향에서 0
        endAngle: 2.2, // 호의 끝 각도, 12시 방향에서 0
        // 각도 증가폭이 커서 소숫점 단위로 증가시켜야 그려지는 각도가 조금씩만 증가함.

        // padAngle: 30,
      });
    })
    .attr("fill","green")
    .attr("transform", "translate(200, 200)");
});

