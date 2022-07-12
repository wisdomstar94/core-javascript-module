import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-arc-function/
// https://stackoverflow.com/questions/57764969/using-a-function-in-d3-arc-attributes

window.addEventListener('load', function() {
  const svgD3Instance = d3.select('svg').append("g");

  svgD3Instance.append("path")
    .attr("class", "arc")
    .attr("d", function(d) {
      return d3.arc()({
        innerRadius: 40,
        outerRadius: 70,
        // outerRadius 와 innerRadius 사이의 영역에 호가 그려집니다. 즉, 호의 굵기를 크게하려면 outerRadius - innerRadius 값이 크게 나오게 하면 됨.
        startAngle: 0, // 호의 시작 각도, 0 이 12시 방향이고 값이 커질 수록 시계방향으로 이동됨.
        endAngle: 2.2, // 호의 끝 각도, 0 이 12시 방향이고 값이 커질 수록 시계방향으로 이동됨.
        // 각도 증가폭이 커서 소숫점 단위로 증가시켜야 그려지는 각도가 조금씩만 증가함.
      });
    })
    .attr("fill","green")
    .attr("transform", "translate(200, 200)");
});

