class Node {
  constructor(data,left=null,right=null) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNodeInTree(data) {
    let node = this.root;
    if (node === null) this.root = new Node(data);
    else {
      if (data < node.data) {
        if (node.left === null) node.left = new Node(data);
        else this.goToNextNode(node.left, data);
      } else if (data > node.data) {
        if (node.right === null) node.right = new Node(data);
        else this.goToNextNode(node.right, data);
      }
    }
  }

  goToNextNode(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
        return;
      } else return this.goToNextNode(node.left, data);
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data);
        return;
      } else {
        return this.goToNextNode(node.right, data);
      }
    }
  }

  maxElementInTree() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node !== null ? node.data : null;
  }

  minElementInTree() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node !== null ? node.data : null;
  }
}

const BST = new BinarySearchTree();
BST.addNodeInTree(50);
BST.addNodeInTree(19);
BST.addNodeInTree(23);
BST.addNodeInTree(1);
BST.addNodeInTree(2);
BST.addNodeInTree(0);
BST.addNodeInTree(60);
BST.addNodeInTree(70);

console.log(BST.maxElementInTree());
console.log(BST.minElementInTree());
