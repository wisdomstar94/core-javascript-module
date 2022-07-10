import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-csv-function/

window.addEventListener('load', async() => {
  const data2 = await d3.csv("./sample.csv");
  console.log('data2', data2);
  /*
    0: {x: '10', y: '3', name: 'apple'}
    1: {x: '20', y: '6', name: 'banana'}
    2: {x: '30', y: '9', name: 'melon'}
    3: {x: '40', y: '12', name: 'kiwi'}
    4: {x: '50', y: '15', name: 'grape'}
  */
});
