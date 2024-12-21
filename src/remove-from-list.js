const { ListNode } = require('../extensions/list-node.js')

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Создаем фиктивный узел, чтобы обработать удаление головы
  let dummyNode = new ListNode(0);
  dummyNode.next = l;

  let current = dummyNode; // Начинаем с фиктивного узла

  // Проходим по списку
  while (current.next !== null) {
    if (current.next.value === k) {
      // Если найден узел с нужным значением, пропускаем его
      current.next = current.next.next;
    } else {
      // Если значение не равно k, продолжаем двигаться по списку
      current = current.next;
    }
  }

  // Возвращаем измененный список, начиная с настоящей головы
  return dummyNode.next;
}

module.exports = {
  removeKFromList
};
