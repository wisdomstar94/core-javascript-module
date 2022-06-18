let selectBoxStyleAAA;

window.addEventListener('load', function() {
  // ...
  selectBoxStyleAAA = new SelectBoxStyleAAA('#select-box-1');
  selectBoxStyleAAA.setValueItems([
    { text: '값1', value: '001' },
    { text: '값2', value: '002' },
    { text: '값3', value: '003' },
    { text: '값4', value: '004' },
    { text: '값5', value: '005' },
    { text: '값6', value: '006' },
    { text: '값7', value: '007' },
    { text: '값8', value: '008' },
    { text: '값9', value: '009' },
    { text: '값10', value: '010' },
    { text: '값11', value: '011' },
    { text: '값12', value: '012' },
  ])
  selectBoxStyleAAA.init();
});

function selectBoxStyleAAAValueCheck() {
  console.log('value', selectBoxStyleAAA.getSelectedValue());
}