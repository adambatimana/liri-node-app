//============================================
//=============== twitter ====================
//============================================

//grab from keys.js
var keys = require("./keys.js")
var Twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');

var command = process.argv[2];
var input = process.argv[3];



var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

// console.log(client)



//============================================
//=============== liri Bot ===================
//============================================

//MY TWEET


if (command === "my-tweets") {

      var params = {
        screen_name: 'allaboutmada',
        count:20
      };

      client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              console.log(tweets)
            }


      });//end client get

}//end if tweet





//============================================
//=============== spotify ====================
//============================================
      //spotify this song
      if (command === "spotify-this-song") {
        spotify.search({ type: 'track', query: input }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }

            // Do something with 'data'
            console.log(data)
});
      }




//============================================
//=============== OMDB ====================
//============================================
    //movie-this
    if (command === "movie-this") {

          //============================================
          //=============== Request ====================
          //============================================

          request('http://www.omdbapi.com/?apikey=40e9cece&t=' + input+ '&r=json', function (error, response, body) {
                if (!error) {
                  console.log('body:', response.body);
                  // console.log('statusCode:', response.statusCode);
                }
          });

    }



//do-what-it-says
