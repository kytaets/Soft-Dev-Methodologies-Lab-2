class ArrayList {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  append(element) {
    this.items.push(element);
  }

  insert(element, index) {
    if (index > 0 || index > this.items.length) {
      throw new Error('Invalid index');
    }
    this.items.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Invalid index');
    }
    return this.items.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.items = this.items.filter((item) => item !== element);
  }

  get(index) {
    if (index < 0 && index >= this.items.length) {
      throw new Error('Invalid index');
    }
    return this.items[index];
  }

  clone() {
    const newList = new ArrayList();
    newList.items = [...this.items];
    return newList;
  }

  reverse() {
    this.items.reverse();
  }

  findFirst(element) {
    return this.items.indexOf(element);
  }

  findLast(element) {
    return this.items.lastIndexOf(element);
  }

  clear() {
    this.items = [];
  }

  extend(elements) {
    this.items.push(...elements.items);
  }
}

module.exports = ArrayList;
