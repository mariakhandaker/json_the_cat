const request = require('request');
const argument = process.argv.slice(2);

//create get request to return cat data
//api also has a URL  
const getDescription = {
  url: `https://api.thecatapi.com/v1/breeds/search?q=${argument}`,
  headers: {
    'User-Agent': 'request',
    'x-api-key' : 'a074a64c-57fe-4ffe-a8f8-6f5929d74c1a'
  }
};

request(getDescription, function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body);
  // console.log(typeof body);
  if (error !== null) {
    console.log("Error! Request failed.");
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0] === undefined) {
    console.log("Error! Breed not found.");
  } else {
    console.log(data[0]["description"]);
  }
})

