var assert = require("assert");
var Record = require("../record.js");

describe("record", function() {

  var record;

  beforeEach( function(){
    record = new Record("ACDC", "Black Ice", "Rock", 10);
  })


  it("should have artist", function() {
    assert.strictEqual( "ACDC", record.artist);
  })

  it("should have title", function() {
    assert.strictEqual( "Black Ice", record.title);
  })

  it("should have genre", function() {
    assert.strictEqual( "Rock", record.genre);
  })

  it("should have price", function() {
    assert.strictEqual( 10, record.price);
  })

  it("should have a toString", function() {
    assert.strictEqual("ACDC, Black Ice, Rock, 10", record.toString());
  }) 


});