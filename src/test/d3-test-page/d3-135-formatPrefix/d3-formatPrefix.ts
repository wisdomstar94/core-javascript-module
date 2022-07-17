import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-format#formatprefix
// https://www.geeksforgeeks.org/d3-js-formatprefix-function/

window.addEventListener('load', async() => {  
  /*
    d3.formatPrefix
    => 로케일의 별칭입니다.format 기본 로케일의 접두사.
    
       주어진 문자열 지정자에 대한 새 형식 함수를 반환합니다. 
       반환된 함수는 숫자를 유일한 인수로 취하고 형식이 지정된 숫자를 나타내는 문자열을 반환합니다. 
       반환된 함수는 고정 소수점 표기법으로 형식을 지정하기 전에 지정된 숫자 참조 값에 대한 적절한 SI 접두사의 단위로 값을 변환합니다.
  */

  console.log(`d3.formatPrefix(".4s", 1e-1)(58)`, d3.formatPrefix(".4s", 1e-1)(58));
  console.log(`d3.formatPrefix(".4s", 1e-2)(42000)`, d3.formatPrefix(".4s", 1e-2)(42000));
  // console.log(`d3.formatPrefix("$, ", 1e-3)(4200)`, d3.formatPrefix("$, ", 1e-3)(4200));
  // console.log(`d3.formatPrefix("^, ", 1e-14)(42.444)`, d3.formatPrefix("^, ", 1e-14)(42.444));
  console.log(`d3.formatPrefix("($.2f", 1e-5)(42.444)`, d3.formatPrefix("($.2f", 1e-5)(42.444));
  console.log(`d3.formatPrefix("#", 1e-18)(2)`, d3.formatPrefix("#", 1e-18)(2));
  console.log(`d3.formatPrefix("#s", 1e-9)(42)`, d3.formatPrefix("#s", 1e-9)(42));
  // console.log(`d3.formatPrefix(", .2r", 1e-12)(421)`, d3.formatPrefix(", .2r", 1e-12)(421));
});
