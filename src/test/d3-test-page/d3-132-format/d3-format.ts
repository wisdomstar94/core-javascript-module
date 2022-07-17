import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-format#format
// https://observablehq.com/@d3/d3-format

window.addEventListener('load', async() => {  
  /*
    d3.format 은 기본 로케일의 locale.format에 대한 별칭입니다.
    d3-forma t은 사람이 사용할 수 있도록 숫자 형식을 지정하는 데 도움이 됩니다.
  */
  console.log(`d3.format(".1f")(0.1 + 0.2)`, d3.format(".1f")(0.1 + 0.2));
  console.log(`d3.format(".0%")(0.123)`, d3.format(".0%")(0.123));
  console.log(`d3.format("($.2f")(-3.5)`, d3.format("($.2f")(-3.5));
  console.log(`d3.format("+20")(42)`, d3.format("+20")(42));
  console.log(`d3.format(".^20")(42)`, d3.format(".^20")(42));
  console.log(`d3.format(".2s")(42e6) `, d3.format(".2s")(42e6) );
  console.log(`d3.format("#x")(48879)`, d3.format("#x")(48879));
  console.log(`d3.format(",.2r")(4223) `, d3.format(",.2r")(4223) );
  console.log(`d3.format("s")(1500)`, d3.format("s")(1500));
  console.log(`d3.format("~s")(-1500)`, d3.format("~s")(-1500));
  console.log(`d3.format(".2")(42)`, d3.format(".2")(42));
  console.log(`d3.format(".2")(4.2)`, d3.format(".2")(4.2));
  console.log(`d3.format(".1")(42)`, d3.format(".1")(42));
  console.log(`d3.format(".1")(4.2)`, d3.format(".1")(4.2));
});
