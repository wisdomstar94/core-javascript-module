import * as d3 from 'd3';

window.addEventListener('load', function() {
  const adder = new d3.Adder();

  const value1 = 0.031333333333233333;
  const value2 = 0.139999999999000001;
  const value3 = 0.333333333333333331;

  adder.add(value1);
  adder.add(value2);
  adder.add(value3);

  console.log(`sum            `, value1 + value2 + value3);
  console.log(`adder.valueOf()`, adder.valueOf());
});
