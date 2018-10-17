'use strict';

class List {
  // Class Constructor
  constructor() {
    this.length = 0;
  }

  //! Basic Functions //
  //* EXAMPLE: hello()
  listHello() {
    console.log(`Hi! I'm ${this.value} from CodeFellows.`);
  }

  // .length
  listLength(input) {
    while (input[this.length] !== undefined) {
      this.length++;
    }
    return this.length;
  }

  // TODO .push()
  listPush(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }

  // TODO .pop()
  listPop() {
    let last = 0;
    for(let i = 0; i <= this.length; i++) {
      if(i === this.length) {
        last = this[this.length-1];
        delete this[i];
      }
    }
  }

  // TODO .slice()
  listSlice(array, begin, end) {
    let arrLength = List.listLength(array);
    let newArr = [];
    
    for(let i=begin; i <= array[end]; i++) {
      if(begin === undefined && end === undefined) {
        newArr[i] = array[i];
      } else if (Number.isInteger(begin)) {
        newArr[i-1] = this[begin + i - 1]
      }      
    }
    return newArr;
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