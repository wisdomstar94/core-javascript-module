import * as d3 from 'd3';

// https://observablehq.com/@d3/d3-autotype

window.addEventListener('load', function() {
  /*
    d3.autoType 은 받은 데이터를 숫자 또는 날짜타입으로 
    자동 형변환을 한 데이터로 반환해주는 역할을 한다.
  */

  console.log(`d3.autoType({date: "2007-04-23", close: "93.24"})`, d3.autoType({date: "2007-04-23", close: "93.24"}));
  console.log(`d3.autoType({date: "2007"})`, d3.autoType({date: "2007"}));
  console.log(`d3.autoType({id: "06075"})`, d3.autoType({id: "06075"}));
  console.log(`d3.autoType([
    "$1.00", // currency symbol
    "(123)", // parenthesis
    "1,234", // comma
    "12px" // suffix
  ])`, d3.autoType([
    "$1.00", // currency symbol
    "(123)", // parenthesis
    "1,234", // comma
    "12px" // suffix
  ]));
  console.log(`d3.autoType([
    "January 1, 2018", // not YYYY-MM-DD
    "TRUE", // not lowercase
    "true"
  ])`, d3.autoType([
    "January 1, 2018", // not YYYY-MM-DD
    "TRUE", // not lowercase
    "true"
  ]));
});

