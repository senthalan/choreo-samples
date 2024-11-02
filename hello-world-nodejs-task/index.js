const axios = require('axios');

const serviceURL = process.env.SVC_URL;
const apiKey =  process.env.API_KEY;

console.log('Hello World!');
console.log(serviceURL);
console.log(apiKey);
const response = await axios.get(serviceURL + '/greeting', {
    headers: {
      'Choreo-API-Key': apiKey
    }
});
console.log(response);
