import Node from "./node";

class Tree {
    // Constructor initializes the tree with a sorted array, removing duplicates
    constructor(array) {
        this.root = this.buildTree(this.removeDuplicate(array).sort((a, b) => a - b)); // Sort the array by deleting duplicates element
    }

    // Recursive function to build a balanced binary search tree
    buildTree(array) {
        if (array.length === 0) {
            return null;
        }

        // Set the middle element of the array as root
        const midIndex = Math.floor(array.length / 2);
        const root = new Node(array[midIndex]);

        // Recursively do the same to the left half and right half
        root.left = this.buildTree(array.slice(0, midIndex));
        root.right = this.buildTree(array.slice(midIndex + 1));

        return root;
    }

    // Recursive function to insert a value into the tree
    insert(value, node) {
        if (node === null) {
            return new Node(value);
        }

        if (node.data < value) {
            node.right = this.insert(value, node.right);
        } else {
            node.left = this.insert(value, node.left);
        }

        return node;
    }

    // Recursive function to delete a node with a specific value from the tree
    delete(value, node = this.root) {
        if (node === null) {
            return node;
        }

        // Recursive calls for ancestors of node to be deleted
        if (node.data > value) {
            node.left = this.delete(value, node.left);
            return node;
        } if (node.data < value) {
            node.right = this.delete(value, node.right);
            return node;
        }

        // If one of the children is empty
        if (node.left === null) {
            return node.right;
        } if (node.right === null) {
            return node.left;
        }

        // If both children exist
        let succParent = node;

        // Find successor
        let succ = node.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }

        if (succParent !== node) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }

        // Copy Successor Data to root
        node.data = succ.data;

        // Delete Successor and return root
        succ = null;
        return node;
    }

    // Recursive function to find a node with a specific value in the tree
    find(value, node) {
        if (node === null) {
            return null;
        }
        if (node.data !== value) {
            return node.data < value
                ? this.find(value, node.right)
                : this.find(value, node.left);
        }
        return node;
    }

    // Traverse the tree in level order and execute a callback function on each node
    levelOrder(callback) {
        if (!this.root) return [];

        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const current = queue.shift();

            if (callback) {
                callback(current);
            } else {
                result.push(current.data);
            }

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }
        }

        return callback ? undefined : result;
    }


    // inorder 
    inOrder(callback) {
        const result = [];

        function traverse(callback){
            if(callback) {
                traverse(callback.left);
                result.push(callback.data);
                traverse(callback.right);
            }
        }

        if (!traverse(callback)) return result;
    }

    // preorder
    preOrder(callback) {
        const result = [];

        function traverse(callback){
            if(callback){
                result.push(callback.data);
                traverse(callback.left);
                traverse(callback.right);
            }
        }

        if(!traverse(callback)) return result;
    }

    // postorder
    postOrder(callback) {
        const result = [];

        function traverse(callback){
            if(callback){
                traverse(callback.left);
                traverse(callback.right);
                result.push(callback.data);
            }
        }

        if(!traverse(callback)) return result;
    }

    // Returns the height of the given node
    height(node = this.root) {
        if (node === null) return -1;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Returns the depth of the given node
    depth(node, root = this.root, level = 0) {
        if (!node) return null;
        if (root === null) return 0;
        if (root.data === node.data) return level;
        const count = this.depth(node, root.left, level + 1);
        if(count !== 0) return count;
        return this.depth(node, root.right, level + 1);
    }

    // Checks if the tree is balanced 
    isBalanced(root = this.root) {
        const leftH = this.height(root.left);
        const rightH = this.height(root.right);
        const dif = Math.abs(leftH - rightH);

        if (dif <= 1) return true;
        return false;
    }

    // Rebalance the inbalanced tree
    rebalance() {
        const sorted = (this.removeDuplicate(this.inOrder(this.root)).sort((a, b) => a - b));
        if (this.isBalanced() === false) {
            this.root = this.buildTree(sorted);
            return "Tree is balanced!"
        }
        return "Tree is already balanced!"
    }

    // Print the tree in a readable format (preorder)
    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    // Creates a new sorted array by deleting duplicate elements
    removeDuplicate(array) {
        return array.filter((item, index) => array.indexOf(item) === index);
    }
}

// Usage
const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree.root);
myTree.prettyPrint();
console.log(myTree.find(7, myTree.root));
console.log(myTree.levelOrder());
console.log(myTree.inOrder(myTree.root));
console.log(myTree.preOrder(myTree.root));
console.log(myTree.postOrder(myTree.root));
console.log(myTree.height(myTree.find(8, myTree.root)));
console.log(myTree.depth(myTree.find(7, myTree.root)));
myTree.insert(30, myTree.root);
myTree.insert(27, myTree.root);
myTree.insert(24, myTree.root);
console.log(myTree.isBalanced());
console.log(myTree.inOrder(myTree.root));
console.log(myTree.rebalance());
myTree.prettyPrint();


