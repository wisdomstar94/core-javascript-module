let requestService;

window.addEventListener('load', function() {
  console.log('request-service');

  requestService = new RequestService();
});

function sendRequest() {
  requestService.ajax({
    url: 'http://localhost:9020/test/test3',
    method: 'get',
    data: {
      name: 'hong~',
      age: 13,
    },
    success: function(data) {
      console.log('success', data);
      /*
        [ 데이터 예시 ]
        {
          response: { ... },
          status: 200,
          statusText: 'OK'
        }
      */
    },
    error: function(error) {
      console.log('error', error);
      /*
        [ 데이터 예시 ]
        {
          response: { ... },
          status: 403,
          statusText: 'Forbbiden'
        }
      */
    },
  });
}

function fileUpload() {
  const file = document.getElementById('file').files[0];
  
  const formData = new FormData();
  formData.append('upfile', file);
  formData.append('why', 'bbb...');

  requestService.ajax({
    url: 'http://localhost:9020/api/file/upload',
    method: 'post',
    data: formData,
    requestBodyType: 'form-data',
    success: function(data) {
      console.log('success', data);
      /*
        [ 데이터 예시 ]
        {
          response: { ... },
          status: 200,
          statusText: 'OK'
        }
      */
    },
    error: function(error) {
      console.log('error', error);
      /*
        [ 데이터 예시 ]
        {
          response: { ... },
          status: 403,
          statusText: 'Forbbiden'
        }
      */
    },
  });
}
