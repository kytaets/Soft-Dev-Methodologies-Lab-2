const ArrayList = require('../src/ArrayList');

describe('ArrayList', () => {
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });

  test('length() returns the correct length', () => {
    expect(list.length()).toBe(0);
    list.append('A');
    expect(list.length()).toBe(1);
  });

  test('append() adds an element to the list', () => {
    list.append('A');
    expect(list.get(0)).toBe('A');
  });

  test('insert() inserts an element at the specified position', () => {
    list.append('A');
    list.append('C');
    list.insert('B', 1);
    expect(list.get(1)).toBe('B');
  });

  test('delete() removes an element by index', () => {
    list.append('A');
    list.append('B');
    expect(list.delete(1)).toBe('B');
    expect(list.length()).toBe(1);
  });

  test('deleteAll() removes all occurrences of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    list.deleteAll('A');
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe('B');
  });

  test('get() returns an element by index', () => {
    list.append('A');
    expect(list.get(0)).toBe('A');
  });

  test('clone() creates a copy of the list', () => {
    list.append('A');
    const clone = list.clone();
    expect(clone.length()).toBe(1);
    expect(clone.get(0)).toBe('A');
  });

  test('reverse() reverses the order of elements', () => {
    list.append('A');
    list.append('B');
    list.reverse();
    expect(list.get(0)).toBe('B');
  });

  test('findFirst() finds the first index of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    expect(list.findFirst('A')).toBe(0);
  });

  test('findLast() finds the last index of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    expect(list.findLast('A')).toBe(2);
  });

  test('clear() clears the list', () => {
    list.append('A');
    list.clear();
    expect(list.length()).toBe(0);
  });

  test('extend() adds elements from another list', () => {
    list.append('A');
    const newList = new ArrayList();
    newList.append('B');
    list.extend(newList);
    expect(list.length()).toBe(2);
    expect(list.get(1)).toBe('B');
  });
});
