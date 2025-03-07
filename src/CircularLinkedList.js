class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 1;
  }

  length() {
    return this.size;
  }

  append(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }

  insert(element, index) {
    if (index < 0 || index > this.size) {
      throw new Error('Invalid index');
    }
    const newNode = new Node(element);
    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        this.head.next = this.head;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        newNode.next = this.head;
        this.head = newNode;
        current.next = this.head;
      }
    } else {
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = newNode;
      newNode.next = current;
    }
    this.size++;
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }
    let deletedValue;
    if (index === 0) {
      deletedValue = this.head.value;
      if (this.size === 1) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
      }
    } else {
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      deletedValue = current.value;
      prev.next = current.next;
    }
    this.size--;
    return deletedValue;
  }

  deleteAll(element) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;
    let count = this.size;

    while (count--) {
      if (current.value === element) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.head = current.next;
        }
        this.size--;
      } else {
        prev = current;
      }
      current = current.next;
    }

    if (this.size === 0) this.head = null;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  clone() {
    const newList = new CircularLinkedList();
    if (!this.head) return newList;

    let current = this.head;
    do {
      newList.append(current.value);
      current = current.next;
    } while (current !== this.head);

    return newList;
  }

  reverse() {
    if (!this.head || this.size < 2) return;

    let prev = null;
    let current = this.head;
    let next = null;
    let first = this.head;

    do {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } while (current !== first);

    this.head.next = prev;
    this.head = prev;
  }

  findFirst(element) {
    if (!this.head) return -1;

    let current = this.head;
    let index = 0;

    do {
      if (current.value === element) return index;
      current = current.next;
      index++;
    } while (current !== this.head);

    return -1;
  }

  findLast(element) {
    if (!this.head) return -1;

    let current = this.head;
    let index = 0;
    let lastIndex = -1;

    do {
      if (current.value === element) lastIndex = index;
      current = current.next;
      index++;
    } while (current !== this.head);

    return lastIndex;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  extend(elements) {
    if (!elements.head) return;
    let current = elements.head;
    do {
      this.append(current.value);
      current = current.next;
    } while (current !== elements.head);
  }

  // Logging list for testing
  print() {
    if (!this.head) {
      console.log('List is empty');
      return;
    }

    let current = this.head;
    let result = '';
    do {
      result += current.value + ' -> ';
      current = current.next;
    } while (current !== this.head);
    console.log(result + '(back to head)');
  }
}

module.exports = CircularLinkedList;
