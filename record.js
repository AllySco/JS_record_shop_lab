
//constructor
var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

//prototype
Record.prototype = {

toString: function() {
  return this.artist + ", " + this.title + ", " + this.genre + ", " + this.price;
}



}




module.exports = Record;