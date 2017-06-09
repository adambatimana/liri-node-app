//============================================
//=============== twitter ====================
//============================================

//grab from keys.js

var require = ("./keys.js")
var twitterConsumerKey = 'UFVqfw3SMzXmpaUrsMWv5Es9m';
var twitterConsumerSecret = 'FE7PGsO5Rnvs9x6f6Ql11A6MTcl8YVPdwGyuwkQqto2Fe83AaW';
var accessTokenKey = '344162315-peAo9hMgBuIxx40BzNHLp1hxBhPKfOKeeJEotF8y';
var accessTokenSecret = 'hFfh2US5MpgsGWoh2HvSDZ25fPJtHzOzUwwrYela0sIxg';
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.twitterConsumerKey,
  consumer_secret: process.env.twitterConsumerSecret,
  access_token_key: process.env.accessTokenKey,
  access_token_secret: process.env.accessTokenSecret
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



//============================================
//=============== spotify ====================
//============================================
var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    // Do something with 'data'
    search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
    // get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/
});

//============================================
//=============== Request ====================
//============================================
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

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

//spotify this song

//movie-this

//do-what-it-says
