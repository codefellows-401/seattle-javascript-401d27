'use strict';

class List {
  // Class Constructor
  constructor(value, array) {
    this.value = value;
    this.array = array;
    this.length = 0;
  }

  //! Basic Functions //
  //* EXAMPLE: hello()
  listHello() {
    console.log(`Hi! I'm ${this.value} from CodeFellows.`);
  }

  // TODO .length
  listLength(array) {
    return 'some code';
  }

  // TODO .push()
  listPush(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }

  // TODO .pop()
  listPop() {
    return 'some code';
  }

  // TODO .slice()
  listSlice() {
    return 'some code';
  }

  // TODO .map()
  listMap(value) {
    let mapList = new List();
    for(let i=0; i < this.length; i++) {
      mapList.push(value(this[i]));
    }
    return mapList;
  }

  // TODO .filter()
  listFilter() {
    return 'some code';
  }

  // TODO .reduce()
  listReduce() {
    return 'some code';
  }

  //! Stretch Goals //
  // .forEach()
  // .shift()
  // .unshift()
  // .splice()
}

// Test Variables
let value = 'Ben';
let array = [1,2,3,4,5];
let newList = new List(value, array);

// Output Tests
newList.listHello();
newList.listLength();

// Module Export
module.exports = List;