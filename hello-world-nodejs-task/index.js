const axios = require('axios');

const serviceURL = process.env.SVC_URL;
const apiKey =  process.env.API_KEY;

console.log('Hello World!');
console.log(serviceURL);
console.log(apiKey);

async function fetchData() {
  try {
    const response = await axios.get(serviceURL + '/greeting', {
      headers: {
        'Choreo-API-Key': apiKey
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the async function
fetchData();
