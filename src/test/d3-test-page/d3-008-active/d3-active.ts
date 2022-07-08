import * as d3 from 'd3';

// https://github.com/d3/d3-transition#active
// https://www.geeksforgeeks.org/d3-js-interpolatergb-function/
// https://runebook.dev/en/docs/d3/d3-transition?page=2#transition_tween

window.addEventListener('load', function() {
  const n = 10;

  const whiteblue = d3.interpolateRgb("#eee", "steelblue");
  const blueorange = d3.interpolateRgb("steelblue", "orange");
  const orangewhite = d3.interpolateRgb("orange", "#eee");

  d3
    .select("body")
    .selectAll("div")
    .data(d3.range(n))
    .enter()
    .append("div")
    .transition()
    .delay(function(d, i) { 
      const delayValue = (i + Math.random() * n / 4) * 1000; 
      console.log('delayValue', delayValue);
      return delayValue; 
    })
    .ease(d3.easeLinear)
    .on("start", function repeat() {
      console.log('repeat', d3.active(this));

      d3
        .active(this)
        ?.styleTween("background-color", function() { 
          console.log('styleTween : 회색 -> 파랑색'); // 회색 -> 파랑색
          return whiteblue; 
        })
        .transition()
        .delay(1000) // 1초 딜레이 적용
        .styleTween("background-color", function() { 
          console.log('styleTween : 파랑색 -> 주황색'); // 파랑색 -> 주황색
          return blueorange; 
        })
        .transition()
        .delay(1000) // 1초 딜레이 적용
        .styleTween("background-color", function() { 
          console.log('styleTween : 주황색 -> 회색'); // 주황색 -> 회색
          return orangewhite; 
        })
        .transition()
        .delay(1000) // 1초 딜레이 적용
        .on("start", repeat);
      });
});

