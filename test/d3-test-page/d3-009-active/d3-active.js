// https://github.com/d3/d3-transition#active

window.addEventListener('load', function() {
  const n = 10;

  const whiteblue = d3.interpolateRgb("#eee", "steelblue");
  const blueorange = d3.interpolateRgb("steelblue", "orange");
  const orangewhite = d3.interpolateRgb("orange", "#eee");

  d3.select("body").selectAll("div")
    .data(d3.range(n))
    .enter()
    .append("div")
    .transition()
      .delay(function(d, i) { 
        const delayValue = i + Math.random() * n / 4; 
        console.log('delayValue', delayValue);
        return delayValue; 
      })
      .ease(d3.easeLinear)
      .on("start", function repeat() {
        console.log('repeat');
        d3.active(this)
            .styleTween("background-color", function() { return whiteblue; })
          .transition()
            .delay(1000)
            .styleTween("background-color", function() { return blueorange; })
          .transition()
            .delay(1000)
            .styleTween("background-color", function() { return orangewhite; })
          .transition()
            .delay(n)
            .on("start", repeat);
      });
});

