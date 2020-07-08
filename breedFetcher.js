const request = require('request');

const fetchBreedDescripition = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body);
    // console.log(typeof body);
    if (error !== null) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data[0] === undefined) {
      callback(null, "Breed not found.");
    } else {
      callback(null, data[0].description);
    }
  })
};


module.exports = { fetchBreedDescripition };