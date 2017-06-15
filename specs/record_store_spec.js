var assert = require("assert");
var RecordStore = require("../record_store.js");
var Record = require("../record.js");


describe("Record Store", function() {

  var recordStore;
  var record1;
  var record2;
  var record3;

  beforeEach( function(){
    recordStore = new RecordStore("Flop", "Glasgow");
    record1 = new Record("ACDC", "Black Ice", "Rock", 10);
    record2 = new Record("ACDC", "Back in Black", "Soft Rock", 10);
    record3 = new Record("ACDC", "Ball Breaker", "Rock", 10);

  })

  it("should have name", function() {
    assert.strictEqual( "Flop", recordStore.name);
  })

  it("should have city", function() {
    assert.strictEqual( "Glasgow", recordStore.city);
  })

  it("should have a balance", function() {
    assert.strictEqual(0, recordStore.balance);
  })

  it("should be able to add records", function() {
    recordStore.add(record1);
    recordStore.add(record2);
    recordStore.add(record3);
    assert.strictEqual(3, recordStore.inventory.length);
  })

  it("should have a toString", function() {
    recordStore.add(record1);
    recordStore.add(record2);
    var expected = record1.toString() + "\n" + record2.toString()+ "\n";
    assert.strictEqual(expected, recordStore.printInventory());
  })

  it("should be able to sell a record", function() {
    recordStore.add(record1);
    recordStore.sell(record1);
    
    assert.strictEqual(10, recordStore.balance);
    assert.strictEqual(0, recordStore.inventory.length);
  })

  it("should be able to report finances", function() {
    recordStore.add(record1);
    recordStore.add(record2);
    recordStore.add(record3);

    assert.strictEqual(30, recordStore.stockValue());
    assert.strictEqual(0, recordStore.balance);

  })

  it("should be able to report finances__after selling", function() {
    recordStore.add(record1);
    recordStore.add(record2);
    recordStore.sell(record2);

    assert.strictEqual(1, recordStore.inventory.length);
    assert.strictEqual(10, recordStore.balance);
    assert.strictEqual(10, recordStore.stockValue());
  })

  it("should be able to select albums by genre", function() {
    recordStore.add(record1);
    recordStore.add(record2);
    recordStore.add(record3);

    assert.strictEqual(1, recordStore.selectGenre("Soft Rock").length);
    assert.strictEqual(2, recordStore.selectGenre("Rock").length);

  })





});