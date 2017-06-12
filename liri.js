

//grab from keys.js
let keys = require("./keys.js")
let Twitter = require('twitter');
let request = require('request');
let spotify = require('spotify');
const fileName = 'log.txt'
const fs = require('fs')
let command = process.argv[2];
let input = process.argv[3];
let contents = 'Log all the information here! ';

//============================================
//=============== read file =============
//============================================


fs.readFile(fileName, 'utf8', function(err,data){
  if (err) {
    console.log(err)
  }

  const logInfo = data.split(',')
})

//============================================
//=============== twitter ====================
//============================================
    let client = new Twitter({
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
        screen_name: 'adambatimana',
        count:20
      };

      client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                  for (i=0; i<tweets.length; i++) {
                      var returnedData = ('Number: ' + (i+1) + '\n' + tweets[i].created_at + '\n'+ '@' +tweets[i].user.name+ ': ' + tweets[i].text + '\n');
                      console.log(returnedData);
                      console.log("-------------------------");

                  }
            };
      });//end client get

}//end if tweet





//============================================
//=============== spotify ====================
//============================================
      //spotify this song
  else if (command === "spotify-this-song") {
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
      else if (command === "movie-this") {

          //============================================
          //=============== Request ====================
          //============================================

          request('http://www.omdbapi.com/?apikey=40e9cece&t=' + input+ '&r=json', function (error, response, body) {
                    if (!error) {
                        var results = JSON.parse(response.body)

                        console.log
                        ('body:', results.Title,
                            results.Year,
                            results.Ratings[0].Value,
                            results.Country,
                            results.Language,
                            results.Plot,
                            results.Actors,
                            results.Ratings[1].Value
                        );

                    }
                    console.log('statusCode:', response.statusCode);

                    fs.appendFile(fileName, ", " + body, function(err){
                      if (err) {
                        console.log(err)
                      }
                    })
          });

    }//do-what-it-says
      else if (command === "do-what-it-says") {

            fs.readFile('random.txt', 'utf8', function(err, data){
              if(err){
                console.log(err)
              }
              fs.appendFile(fileName, ", " + data, function(err){
                if (err) {
                  console.log(err)
                }
              })
              console.log(data)

            })
      }
      //bonus material for MRNOBODY
      else if (command === "movie-this" && input === "undefined"){

            request('http://www.omdbapi.com/?apikey=40e9cece&t=mr+nobody&r=json', function (error, response, body) {
                      if (!error) {
                          console.log('body:', response.body);
                          console.log('statusCode:', response.statusCode);


                          console.log("if you have not watched MR. Nobody, then you should")

                          fs.appendFile(fileName, ", " + body, function(err){
                                if (err) {
                                  console.log(err)
                                }
                          })
                      }
            });
      }
