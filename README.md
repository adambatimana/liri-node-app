# liri-node-app

This project was a node.js based application that takes commands from the node.js command line and processes the twitter API, OMBD API, and call .txt files within the application to display in the terminal.

In the command line if the user types "node liri.js my-tweets" , the app will pull the last 20 tweets from the account the API is connected to. 

<p align="center">
  <img src="/liriTweets.png" />
</p>

In the command line if the user types "node liri.js movie-this { MOVIE NAME }" , the app will pull specific information from OMBD API and display in the command line. 

<p align="center">
  <img src="/lirimovie.png" />
</p>

In the command line if the user types "node liri.js do-what-it-says" , the app will pull whatever text is saved inside the .txt file in the project directory. 

<p align="center">
  <img src="/liridwis.png" />
</p>
