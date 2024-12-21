const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.treeRoot = null; // Инициализируем корень дерева
  }

  root() {
    return this.treeRoot; // Возвращаем корень
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.treeRoot) {
      this.treeRoot = newNode; // Если дерево пустое, добавляем корень
      return;
    }

    let current = this.treeRoot;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode; // Добавляем влево
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode; // Добавляем вправо
          break;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) return true;
      current = data < current.data ? current.left : current.right;
    }

    return false;
  }

  find(data) {
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  remove(data) {
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // Узел найден
      if (!node.left && !node.right) {
        // Узел — лист
        return null;
      }

      if (!node.left) {
        // Узел с одним потомком (справа)
        return node.right;
      }

      if (!node.right) {
        // Узел с одним потомком (слева)
        return node.left;
      }

      // Узел с двумя потомками
      let minRight = this._findMinNode(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.treeRoot) return null;

    let current = this.treeRoot;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.treeRoot) return null;

    let current = this.treeRoot;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

// Экспортируем класс
module.exports = {
  BinarySearchTree
};


module.exports = {
  BinarySearchTree
};