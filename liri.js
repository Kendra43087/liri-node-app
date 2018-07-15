require("dotenv").config();

var spotify = new Spotify(keys.spotify);

function Spotify(artist, name, link, album){
    this.artist = artist;
    this.name = name;
    this.link = link;
    this.album = album;
}
  

    this.printStats = function(){
        console.log(`Art: ${this.artist}`);
        console.log(`Name: ${this.name}`);
        console.log(`Link: ${this.link}`);
        console.log(`Alb: ${this.album}`);
    }

const song = new Spotify("Ace of Base", "The Sign", "https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE?si=J9yH6ttER3ui0e8vaEAJJA", "The Sign");
song.printStats();