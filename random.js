const axios = require('axios');

// set up the request parameters
const post_array = [];
post_array.push({
  "keywords": [
    "phone",
    "iphone",
    "samsung"
  ],
  "language_name": "English",
  "location_code": 2840
});


// make the http GET request to Rainforest API
axios({
  method: 'post',
  url: 'https://api.dataforseo.com/v3/dataforseo_labs/amazon/bulk_search_volume/live',
  auth: {
    username: 'vismaysuramwar@gmail.com',
    password: 'b00eb30c75c58fdc'
  },
  data: post_array,
  headers: {
    'content-type': 'application/json'
  }
}).then(function (response) {
  var result = response['data']['tasks'];
  // Result data
  console.log(result[0].result[0].items);
}).catch(function (error) {
  console.log(error);
});