const request = require('request');
const breedName = process.argv.slice(2);

const fetchBreedDescripition = (breedName) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
     if (error !== null) {
      callback(error, null);
    }
    const data = JSON.parse(body);
  
    if (data[0] === undefined) {
      callback(null, "Breed not found.");
    }
    console.log(data[0].description);
  })
};

module.exports = { fetchBreedDescripition };