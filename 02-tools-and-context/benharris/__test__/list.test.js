const List = require('../list.js');

// Basic Functionality
describe('When properly invoked', () => {

  it('listHello will provide a greeting.', () => {
    const actual = List.listHello();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listLength will return the length', () => {
    const actual = List.listLength();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listPush will add one or more elements to the beginning of an array and return the new lengthy of the array', () => {
    const actual = List.listPush();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listPop will remove an element from the end of an array and return the removed element', () => {
    const actual = List.listPop();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listSlice will return a portion of an array as a new array object, but not include the end of the specified range', () => {
    const actual = List.listSlice();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listMap will create a new array with the results of calling a provided function on every element in the calling array.', () => {
    const actual = List.listMap();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listFilter will create a new array with all elements that pass the test implemented by the provided function.', () => {
    const actual = List.listFilter();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  it('listReduce will execute a reducer function on each member of the array resulting in a single output value', () => {
    const actual = List.listReduce();
    const expect = '';
    expect(actual).toEqual(expect);
  });

  //* STRETGH GOALS
  // xit('listForEach will execute a provided function once for each array element.', () => {
  //   const actual = List.listForEach();
  //   const expect = '';
  //   expect(actual).toEqual(expect);
  // });

  // xit('listShift', () => {
  //   const actual = List.listShift();
  //   const expect = '';
  //   expect(actual).toEqual(expect);
  // });

  // xit('listUnshift', () => {
  //   const actual = List.listUnshift();
  //   const expect = '';
  //   expect(actual).toEqual(expect);
  // });

  // xit('listSplice', () => {
  //   const actual = List.listSplice();
  //   const expect = '';
  //   expect(actual).toEqual(expect);
  // });
});