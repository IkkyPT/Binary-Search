import Tree from "./binarySearch";

// Generate an array that contains x num of random numbers
function generateNum(num) {
    const random = [];
    for (let i = 0; i <= num; i++){
        random.push(Math.round(Math.random() * 100));
    }

    return random;
}


// Usage teste
const myTree = new Tree(generateNum(99));
myTree.prettyPrint();
console.log(myTree.isBalanced());
console.log(myTree.levelOrder());
console.log(myTree.inOrder(myTree.root));
console.log(myTree.preOrder(myTree.root));
console.log(myTree.postOrder(myTree.root));
myTree.insert(200, myTree.root);
myTree.insert(164, myTree.root);
myTree.insert(153, myTree.root);
console.log(myTree.isBalanced());
myTree.rebalance();
console.log(myTree.isBalanced());
console.log(myTree.levelOrder());
console.log(myTree.inOrder(myTree.root));
console.log(myTree.preOrder(myTree.root));
console.log(myTree.postOrder(myTree.root));
