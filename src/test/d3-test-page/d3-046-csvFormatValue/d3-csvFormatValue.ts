import * as d3 from 'd3';

window.addEventListener('load', async() => {
  /*
    d3.csvFormatValue 함수는 주어진 인자 값을 csv 포맷 형식에 맞게 변환하여 반환해주는 함수입니다.
    ex) 3,000 -> "3,000"
        hello -> hello
        hel,lo -> "hel,lo"

    --> 쉼표가 들어갔을 때 양 옆에 "" 쌍따옴표가 붙어서 반환되는 이유는
        일반적으로 csv 의 구분자가 쉼표이기 때문에 구분자로 인식되지 않게 하기 위함입니다.
  */
  const csvFormatValue1 = d3.csvFormatValue('3,000');
  console.log('csvFormatValue1');
  console.log(csvFormatValue1);

  const csvFormatValue2 = d3.csvFormatValue('hel,lo');
  console.log('csvFormatValue2');
  console.log(csvFormatValue2);
});
