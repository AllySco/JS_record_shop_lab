var _ = require("lodash");

//constructor
var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

//prototype
RecordStore.prototype = {

  add: function(record){
    this.inventory.push(record);
  },

  printInventory: function(){
    var string = "";
    _.forEach(this.inventory, function(album){
      string += album.toString()+"\n";
    })
    return string;
  },

  sell: function(record) {
    var recordToSell = _.find(this.inventory, function(element){
      return element.title === record.title;
    })
    this.balance += recordToSell.price;
    //now to remove record from inventory
    _.remove(this.inventory, function(element){
          return element.title === record.title;
        })
  },

  stockValue: function(){

    return _.sumBy(this.inventory, function(album){
      return album.price;
    })
  }





}




module.exports = RecordStore;