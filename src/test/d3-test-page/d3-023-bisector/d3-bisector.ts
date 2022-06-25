import * as d3 from 'd3';

// https://www.geeksforgeeks.org/d3-js-bisector-function/

interface Data {
  date: Date;
  value: number;
}

window.addEventListener('load', function() {
  /*
    d3.bisector 함수는
    직접 비교기 함수를 사용하여 커스텀된 bisect 함수를 반환한다.
  */

  const data: Data[] = [
    { date: new Date(2011, 1, 1), value: 0.5 },
    { date: new Date(2012, 2, 1), value: 0.6 },
    { date: new Date(2013, 3, 1), value: 0.7 },
    { date: new Date(2014, 4, 1), value: 0.8 },
    { date: new Date(2015, 4, 1), value: 0.8 },
    { date: new Date(2017, 4, 1), value: 0.8 },
  ]; 

  var bisectDate = d3.bisector<Data, Date>(function(d) { 
    return d.date; 
  }).left; 
  
  var dat = new Date(2014, 9, 2);
  console.log(bisectDate(data, dat)); 
});

