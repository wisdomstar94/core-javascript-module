let regularExpression;

window.addEventListener('load', function() {
  regularExpression = new RegularExpression();

  const target1 = '안녕33 하세 !!! 44  @@@ 요 ***  55 반 66 갑습니다.';
  console.log('target1', target1);
  console.log('regularExpression.getRemoveNumberString(target1)', regularExpression.getRemoveNumberString(target1));
  console.log('regularExpression.getRemoveCharString(target1, "요")', regularExpression.getRemoveCharString(target1, '요'));
  console.log('regularExpression.getRemoveSpecialCharString(target1)', regularExpression.getRemoveSpecialCharString(target1));
});
