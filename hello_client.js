var unirest = require('unirest');

// makes an HTTP GET request, argument is url of page to visit, end method of request obj returned by unirest.get is called
unirest.get('http://www.thinkful.com/').end(function (response) {
  console.log('Status:', response.statusCode);
  console.log('Headers: ', response.headers);
  console.log('Body:', response.body);
});
