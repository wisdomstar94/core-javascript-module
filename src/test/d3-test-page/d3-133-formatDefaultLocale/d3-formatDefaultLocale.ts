import * as d3 from 'd3';

// https://devdocs.io/d3~7/d3-format#formatdefaultlocale
// https://runebook.dev/ko/docs/d3/d3-format
// https://github.com/d3/d3-format/tree/main/locale

window.addEventListener('load', async() => {  
  /*
    d3.formatDefaultLocale
    => d3.format 및 d3.formatPrefix를 새 로케일의 locale.format 및 locale.formatPrefix로 재정의한다는 점을 제외하고 d3.formatLocale과 동일합니다. 
    기본 로케일을 설정하지 않으면 기본적으로 미국 영어로 설정됩니다.
  */
  
  const locale = await d3.json("https://cdn.jsdelivr.net/npm/d3-format@3/locale/ko-KR.json") as d3.FormatLocaleDefinition;
  d3.formatDefaultLocale(locale);

  console.log(`d3.format("$,")(1234.56)`, d3.format("$,")(1234.56)); // 1 234,56 руб.
});
