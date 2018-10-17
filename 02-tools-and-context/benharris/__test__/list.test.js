const List = require('../list.js');
const newList = new List('Ben');

// Basic Functionality
describe('When method is properly invoked...', () => {

  it('listHello will provide a proper greeting.', () => {
    const input  = newList.listHello();
    const output = `Hi! I'm Ben from CodeFellows.`;
    expect(input).toMatch(output);
  });

  it('listLength will return the correct length of a string or array', () => {
    const testStr = 'I am Ten!!';
    const testArr = [0,1,2,3,4,5,6,7,8,9];
    const input1  = newList.listLength(testStr);
    const input2  = newList.listLength(testArr);
    const output = 10;

    expect(input1).toEqual(output);
    expect(input2).toEqual(output);
  });

  it('listPush will add one or more elements to the END of an array and return the new length of the array', () => {
    const input  = List.listPush();
    const output = '';
    expect(input).toEqual(output);
  });

  // xit('listPop will remove an element from the END of an array and return the removed element', () => {
  //   const input  = List.listPop();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listSlice will return a portion of an array as a new array object, but not include the end of the specified range', () => {
  //   const input  = List.listSlice();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listMap will create a new array with the results of calling a provided function on every element in the calling array.', () => {
  //   const input  = List.listMap();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listFilter will create a new array with all elements that pass the test implemented by the provided function.', () => {
  //   const input  = List.listFilter();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listReduce will execute a reducer function on each member of the array resulting in a single output value', () => {
  //   const input  = List.listReduce();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  //* STRETGH GOALS
  // xit('listForEach will execute a provided function once for each array element.', () => {
  //   const input  = List.listForEach();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listShift', () => {
  //   const input  = List.listShift();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listUnshift', () => {
  //   const input  = List.listUnshift();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });

  // xit('listSplice', () => {
  //   const input  = List.listSplice();
  //   const output = '';
  //   expect(input).toEqual(output);
  // });
});