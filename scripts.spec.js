const add = require('./add')

describe('add', () => {
  test('adds two integers together', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(add(1, 4000)).toEqual(4001);
  });
  test('works with negative numbers', () => {
    expect(add(-10, 4)).toEqual(-6);
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
});