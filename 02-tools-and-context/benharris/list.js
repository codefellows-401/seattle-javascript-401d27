'use strict';

class List {
  // Class Constructor
  constructor(name) {
    this.name = name;
    this.length = 0;
  }

  //! Basic Functions //
  //* REFERENCE: hello()
  listHello() {
    return `Hi! I'm ${this.name} from CodeFellows.`;
  }

  // .length
  listLength(input) {
    while (input[this.length] !== undefined) {
      this.length++;
    }
    return this.length;
  }

  // TODO .push()
  listPush(input) {
    // find the length of the current input
    this[this.length] = input;
    
    // modify the length
    this.length++;

    // add value to the back of the list
    // TODO 

    // return the length
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
    return 'some code';
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

//* Test Variables
let myName = 'Ben';
let testArr = [1,2,3,4,5];
let testStr = 'I am Ten!!';
let testNum = 7;
let newList = new List(myName);

//* Method Tests
// newList.listHello();
// newList.listLength(testStr);
newList.listPush(testArr);

//* Module Export
module.exports = List;