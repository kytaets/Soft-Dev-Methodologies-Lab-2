const CircularLinkedList = require('../src/CircularLinkedList.js');

describe('CircularLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new CircularLinkedList();
  });

  test('length() returns correct length', () => {
    expect(list.length()).toBe(0);
    list.append('A');
    expect(list.length()).toBe(1);
  });

  test('append() adds an element to the list', () => {
    list.append('A');
    list.append('B');
    expect(list.get(0)).toBe('A');
    expect(list.get(1)).toBe('B');
  });

  test('get() retrieves an element by index', () => {
    list.append('A');
    list.append('B');
    list.append('C');
    expect(list.get(1)).toBe('B');
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
    list.append('C');
    expect(list.delete(1)).toBe('B');
    expect(list.length()).toBe(2);
  });

  test('findFirst() returns the first occurrence of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    expect(list.findFirst('A')).toBe(0);
  });

  test('findLast() returns the last occurrence of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    expect(list.findLast('A')).toBe(2);
  });

  test('clear() removes all elements from the list', () => {
    list.append('A');
    list.append('B');
    list.clear();
    expect(list.length()).toBe(0);
  });

  test('reverse() reverses the list order', () => {
    list.append('A');
    list.append('B');
    list.append('C');
    list.reverse();
    expect(list.get(0)).toBe('C');
    expect(list.get(1)).toBe('B');
    expect(list.get(2)).toBe('A');
  });

  test('extend() adds elements from another list', () => {
    list.append('A');
    const newList = new CircularLinkedList();
    newList.append('B');
    newList.append('C');
    list.extend(newList);
    expect(list.length()).toBe(3);
    expect(list.get(1)).toBe('B');
    expect(list.get(2)).toBe('C');
  });
});
