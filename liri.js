require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys= require("./keys.js")
//var spotify = new Spotify(keys.spotify);
var spotify = new Spotify({
    id: 'c10d3bad59274e4e82ca1991be3f4f9f',
    secret:'07d0b3cae35240bea1067952eed2eb0c'
  });

//spotify
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0]); 
  });
// function Spotify(artist, name, link, album){
//     this.artist = artist;
//     this.name = name;
//     this.link = link;
//     this.album = album;
// }
//     this.printStats = function(){
//         console.log(`Art: ${this.artist}`);
//         console.log(`Name: ${this.name}`);
//         console.log(`Link: ${this.link}`);
//         console.log(`Alb: ${this.album}`);
//     }
// const song = new Spotify("Ace of Base", "The Sign", "https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE?si=J9yH6ttER3ui0e8vaEAJJA", "The Sign");
// song.printStats();