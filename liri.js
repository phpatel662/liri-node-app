var axios = require("axios");
var movieInfo = process.argv[2];
var movie = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
    fuction(response) {
        console.log(response)
    }
);