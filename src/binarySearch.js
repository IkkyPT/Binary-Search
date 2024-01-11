import Node from "./node";

class Tree {
    constructor(array) {
        this.root = this.buildTree(this.removeDuplicate(array)); // Sort the array by deleting duplicates element
    }

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

    // Print the preorder three
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

    // Creates a new sorted array by deleting the duplicate elements
    removeDuplicate(array) {
        return array.filter((item, index) => array.indexOf(item) === index);
    }
}

// Usage
const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree.root);
myTree.prettyPrint();
