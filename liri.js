//============================================
//=============== twitter ====================
//============================================

//grab from keys.js
var keys = require("./keys.js")
var Twitter = require('twitter');





var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});



//============================================
//=============== spotify ====================
//============================================
// var spotify = require('spotify');
//
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//
//     // Do something with 'data'
//     search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
//     // get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/
// });

//============================================
//=============== Request ====================
//============================================
// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

//============================================
//=============== OMDB ====================
//============================================

// data request url
//http://www.omdbapi.com/?apikey=[yourkey]&

//poster data request
//http://img.omdbapi.com/?apikey=[yourkey]&


//============================================
//=============== liri Bot ===================
//============================================

//MY TWEET

var command = process.argv[2];

if (command === "my-tweets") {

      var params = {
        screen_name: 'allaboutmada',
        count:20
      };

      client.get('statuses/user_timeline', params, function(error, tweets, response) {

            if (!error) {

              console.log(tweets)

            };//end if

      });//end client get

}//end if tweet

//spotify this song

//movie-this

//do-what-it-says
