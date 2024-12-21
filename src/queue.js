const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js'); 
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// queue.js


class Queue {
  constructor() {
    this.head = null;  // Указатель на начало очереди
    this.tail = null;  // Указатель на конец очереди
  }

  // Метод для добавления элемента в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value);  // Создаём новый узел

    if (!this.head) {
      // Если очередь пуста, новый элемент становится головой и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Если очередь не пуста, добавляем новый элемент в конец
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Метод для удаления элемента из начала очереди
  dequeue() {
    if (!this.head) {
      // Если очередь пуста, возвращаем null
      return null;
    }

    const value = this.head.value;  // Сохраняем значение текущей головы
    this.head = this.head.next;     // Сдвигаем голову на следующий элемент

    if (!this.head) {
      // Если очередь стала пустой, обнуляем хвост
      this.tail = null;
    }

    return value;  // Возвращаем значение удалённого элемента
  }

  // Метод для получения представления очереди как связанного списка
  getUnderlyingList() {
    return this.head;  // Возвращаем связанный список начиная с головы
  }
}

module.exports = { Queue };


module.exports = {
  Queue
};
