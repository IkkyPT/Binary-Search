/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binarySearch.js":
/*!*****************************!*\
  !*** ./src/binarySearch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Tree = /*#__PURE__*/function () {
  // Constructor initializes the tree with a sorted array, removing duplicates
  function Tree(array) {
    _classCallCheck(this, Tree);
    this.root = this.buildTree(this.removeDuplicate(array).sort(function (a, b) {
      return a - b;
    })); // Sort the array by deleting duplicates element
  }

  // Recursive function to build a balanced binary search tree
  _createClass(Tree, [{
    key: "buildTree",
    value: function buildTree(array) {
      if (array.length === 0) {
        return null;
      }

      // Set the middle element of the array as root
      var midIndex = Math.floor(array.length / 2);
      var root = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](array[midIndex]);

      // Recursively do the same to the left half and right half
      root.left = this.buildTree(array.slice(0, midIndex));
      root.right = this.buildTree(array.slice(midIndex + 1));
      return root;
    }

    // Recursive function to insert a value into the tree
  }, {
    key: "insert",
    value: function insert(value, node) {
      if (node === null) {
        return new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      }
      if (node.data < value) {
        node.right = this.insert(value, node.right);
      } else {
        node.left = this.insert(value, node.left);
      }
      return node;
    }

    // Recursive function to delete a node with a specific value from the tree
  }, {
    key: "delete",
    value: function _delete(value) {
      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (node === null) {
        return node;
      }

      // Recursive calls for ancestors of node to be deleted
      if (node.data > value) {
        node.left = this["delete"](value, node.left);
        return node;
      }
      if (node.data < value) {
        node.right = this["delete"](value, node.right);
        return node;
      }

      // If one of the children is empty
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      // If both children exist
      var succParent = node;

      // Find successor
      var succ = node.right;
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
  }, {
    key: "find",
    value: function find(value, node) {
      if (node === null) {
        return null;
      }
      if (node.data !== value) {
        return node.data < value ? this.find(value, node.right) : this.find(value, node.left);
      }
      return node;
    }

    // Traverse the tree in level order and execute a callback function on each node
  }, {
    key: "levelOrder",
    value: function levelOrder(callback) {
      if (!this.root) return [];
      var queue = [this.root];
      var result = [];
      while (queue.length > 0) {
        var current = queue.shift();
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
  }, {
    key: "inOrder",
    value: function inOrder(callback) {
      var result = [];
      function traverse(callback) {
        if (callback) {
          traverse(callback.left);
          result.push(callback.data);
          traverse(callback.right);
        }
      }
      if (!traverse(callback)) return result;
    }

    // preorder
  }, {
    key: "preOrder",
    value: function preOrder(callback) {
      var result = [];
      function traverse(callback) {
        if (callback) {
          result.push(callback.data);
          traverse(callback.left);
          traverse(callback.right);
        }
      }
      if (!traverse(callback)) return result;
    }

    // postorder
  }, {
    key: "postOrder",
    value: function postOrder(callback) {
      var result = [];
      function traverse(callback) {
        if (callback) {
          traverse(callback.left);
          traverse(callback.right);
          result.push(callback.data);
        }
      }
      if (!traverse(callback)) return result;
    }

    // Returns the height of the given node
  }, {
    key: "height",
    value: function height() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      if (node === null) return -1;
      var leftHeight = this.height(node.left);
      var rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }

    // Returns the depth of the given node
  }, {
    key: "depth",
    value: function depth(node) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (!node) return null;
      if (root === null) return 0;
      if (root.data === node.data) return level;
      var count = this.depth(node, root.left, level + 1);
      if (count !== 0) return count;
      return this.depth(node, root.right, level + 1);
    }

    // Checks if the tree is balanced 
  }, {
    key: "isBalanced",
    value: function isBalanced() {
      var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var leftH = this.height(root.left);
      var rightH = this.height(root.right);
      var dif = Math.abs(leftH - rightH);
      if (dif <= 1) return true;
      return false;
    }

    // Rebalance the inbalanced tree
  }, {
    key: "rebalance",
    value: function rebalance() {
      var sorted = this.removeDuplicate(this.inOrder(this.root)).sort(function (a, b) {
        return a - b;
      });
      if (this.isBalanced() === false) {
        this.root = this.buildTree(sorted);
        return "Tree is balanced!";
      }
      return "Tree is already balanced!";
    }

    // Print the tree in a readable format (preorder)
  }, {
    key: "prettyPrint",
    value: function prettyPrint() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        this.prettyPrint(node.right, "".concat(prefix).concat(isLeft ? "│   " : "    "), false);
      }
      console.log("".concat(prefix).concat(isLeft ? "└── " : "┌── ").concat(node.data));
      if (node.left !== null) {
        this.prettyPrint(node.left, "".concat(prefix).concat(isLeft ? "    " : "│   "), true);
      }
    }

    // Creates a new sorted array by deleting duplicate elements
  }, {
    key: "removeDuplicate",
    value: function removeDuplicate(array) {
      return array.filter(function (item, index) {
        return array.indexOf(item) === index;
      });
    }
  }]);
  return Tree;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Node = /*#__PURE__*/_createClass(function Node(data) {
  _classCallCheck(this, Node);
  this.data = data;
  this.right = null;
  this.left = null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/drive.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binarySearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearch */ "./src/binarySearch.js");


// Generate an array that contains x num of random numbers
function generateNum(num) {
  var random = [];
  for (var i = 0; i <= num; i++) {
    random.push(Math.round(Math.random() * 100));
  }
  return random;
}

// Usage teste
var myTree = new _binarySearch__WEBPACK_IMPORTED_MODULE_0__["default"](generateNum(99));
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDK0IsTUFBTSxDQUFDakUsSUFBSSxDQUFDLENBQUM7QUFDekNzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDOUIsU0FBUyxDQUFDOEIsTUFBTSxDQUFDakUsSUFBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0JpbmFyeSBTZWFyY2gvLi9zcmMvYmluYXJ5U2VhcmNoLmpzIiwid2VicGFjazovL0JpbmFyeSBTZWFyY2gvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9CaW5hcnkgU2VhcmNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JpbmFyeSBTZWFyY2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JpbmFyeSBTZWFyY2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9CaW5hcnkgU2VhcmNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQmluYXJ5IFNlYXJjaC8uL3NyYy9kcml2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNsYXNzIFRyZWUge1xuICAgIC8vIENvbnN0cnVjdG9yIGluaXRpYWxpemVzIHRoZSB0cmVlIHdpdGggYSBzb3J0ZWQgYXJyYXksIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAgICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZSh0aGlzLnJlbW92ZUR1cGxpY2F0ZShhcnJheSkuc29ydCgoYSwgYikgPT4gYSAtIGIpKTsgLy8gU29ydCB0aGUgYXJyYXkgYnkgZGVsZXRpbmcgZHVwbGljYXRlcyBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGJ1aWxkIGEgYmFsYW5jZWQgYmluYXJ5IHNlYXJjaCB0cmVlXG4gICAgYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBtaWRkbGUgZWxlbWVudCBvZiB0aGUgYXJyYXkgYXMgcm9vdFxuICAgICAgICBjb25zdCBtaWRJbmRleCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShhcnJheVttaWRJbmRleF0pO1xuXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGRvIHRoZSBzYW1lIHRvIHRoZSBsZWZ0IGhhbGYgYW5kIHJpZ2h0IGhhbGZcbiAgICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXkuc2xpY2UoMCwgbWlkSW5kZXgpKTtcbiAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LnNsaWNlKG1pZEluZGV4ICsgMSkpO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBpbnNlcnQgYSB2YWx1ZSBpbnRvIHRoZSB0cmVlXG4gICAgaW5zZXJ0KHZhbHVlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA8IHZhbHVlKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gZGVsZXRlIGEgbm9kZSB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgZnJvbSB0aGUgdHJlZVxuICAgIGRlbGV0ZSh2YWx1ZSwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWN1cnNpdmUgY2FsbHMgZm9yIGFuY2VzdG9ycyBvZiBub2RlIHRvIGJlIGRlbGV0ZWRcbiAgICAgICAgaWYgKG5vZGUuZGF0YSA+IHZhbHVlKSB7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSB0aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9IGlmIChub2RlLmRhdGEgPCB2YWx1ZSkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBjaGlsZHJlbiBpcyBlbXB0eVxuICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5yaWdodDtcbiAgICAgICAgfSBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGJvdGggY2hpbGRyZW4gZXhpc3RcbiAgICAgICAgbGV0IHN1Y2NQYXJlbnQgPSBub2RlO1xuXG4gICAgICAgIC8vIEZpbmQgc3VjY2Vzc29yXG4gICAgICAgIGxldCBzdWNjID0gbm9kZS5yaWdodDtcbiAgICAgICAgd2hpbGUgKHN1Y2MubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY1BhcmVudCA9IHN1Y2M7XG4gICAgICAgICAgICBzdWNjID0gc3VjYy5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Y2NQYXJlbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2NQYXJlbnQubGVmdCA9IHN1Y2MucmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWNjUGFyZW50LnJpZ2h0ID0gc3VjYy5yaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgU3VjY2Vzc29yIERhdGEgdG8gcm9vdFxuICAgICAgICBub2RlLmRhdGEgPSBzdWNjLmRhdGE7XG5cbiAgICAgICAgLy8gRGVsZXRlIFN1Y2Nlc3NvciBhbmQgcmV0dXJuIHJvb3RcbiAgICAgICAgc3VjYyA9IG51bGw7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBmaW5kIGEgbm9kZSB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgaW4gdGhlIHRyZWVcbiAgICBmaW5kKHZhbHVlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5kYXRhICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZGF0YSA8IHZhbHVlXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZpbmQodmFsdWUsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICAgICAgOiB0aGlzLmZpbmQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLy8gVHJhdmVyc2UgdGhlIHRyZWUgaW4gbGV2ZWwgb3JkZXIgYW5kIGV4ZWN1dGUgYSBjYWxsYmFjayBmdW5jdGlvbiBvbiBlYWNoIG5vZGVcbiAgICBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gW107XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5sZWZ0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gaW5vcmRlciBcbiAgICBpbk9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2subGVmdCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suZGF0YSk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2sucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cmF2ZXJzZShjYWxsYmFjaykpIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gcHJlb3JkZXJcbiAgICBwcmVPcmRlcihjYWxsYmFjaykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiB0cmF2ZXJzZShjYWxsYmFjayl7XG4gICAgICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suZGF0YSk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2subGVmdCk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2sucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRyYXZlcnNlKGNhbGxiYWNrKSkgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBwb3N0b3JkZXJcbiAgICBwb3N0T3JkZXIoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhdmVyc2UoY2FsbGJhY2spe1xuICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNhbGxiYWNrLmxlZnQpO1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNhbGxiYWNrLnJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0cmF2ZXJzZShjYWxsYmFjaykpIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBnaXZlbiBub2RlXG4gICAgaGVpZ2h0KG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiAtMTtcbiAgICAgICAgY29uc3QgbGVmdEhlaWdodCA9IHRoaXMuaGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gdGhpcy5oZWlnaHQobm9kZS5yaWdodCk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGRlcHRoIG9mIHRoZSBnaXZlbiBub2RlXG4gICAgZGVwdGgobm9kZSwgcm9vdCA9IHRoaXMucm9vdCwgbGV2ZWwgPSAwKSB7XG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHJvb3QuZGF0YSA9PT0gbm9kZS5kYXRhKSByZXR1cm4gbGV2ZWw7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5kZXB0aChub2RlLCByb290LmxlZnQsIGxldmVsICsgMSk7XG4gICAgICAgIGlmKGNvdW50ICE9PSAwKSByZXR1cm4gY291bnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoKG5vZGUsIHJvb3QucmlnaHQsIGxldmVsICsgMSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tzIGlmIHRoZSB0cmVlIGlzIGJhbGFuY2VkIFxuICAgIGlzQmFsYW5jZWQocm9vdCA9IHRoaXMucm9vdCkge1xuICAgICAgICBjb25zdCBsZWZ0SCA9IHRoaXMuaGVpZ2h0KHJvb3QubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0SCA9IHRoaXMuaGVpZ2h0KHJvb3QucmlnaHQpO1xuICAgICAgICBjb25zdCBkaWYgPSBNYXRoLmFicyhsZWZ0SCAtIHJpZ2h0SCk7XG5cbiAgICAgICAgaWYgKGRpZiA8PSAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlYmFsYW5jZSB0aGUgaW5iYWxhbmNlZCB0cmVlXG4gICAgcmViYWxhbmNlKCkge1xuICAgICAgICBjb25zdCBzb3J0ZWQgPSAodGhpcy5yZW1vdmVEdXBsaWNhdGUodGhpcy5pbk9yZGVyKHRoaXMucm9vdCkpLnNvcnQoKGEsIGIpID0+IGEgLSBiKSk7XG4gICAgICAgIGlmICh0aGlzLmlzQmFsYW5jZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMuYnVpbGRUcmVlKHNvcnRlZCk7XG4gICAgICAgICAgICByZXR1cm4gXCJUcmVlIGlzIGJhbGFuY2VkIVwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiVHJlZSBpcyBhbHJlYWR5IGJhbGFuY2VkIVwiXG4gICAgfVxuXG4gICAgLy8gUHJpbnQgdGhlIHRyZWUgaW4gYSByZWFkYWJsZSBmb3JtYXQgKHByZW9yZGVyKVxuICAgIHByZXR0eVByaW50KG5vZGUgPSB0aGlzLnJvb3QsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgbmV3IHNvcnRlZCBhcnJheSBieSBkZWxldGluZyBkdXBsaWNhdGUgZWxlbWVudHNcbiAgICByZW1vdmVEdXBsaWNhdGUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG5cblxuIiwiY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVHJlZSBmcm9tIFwiLi9iaW5hcnlTZWFyY2hcIjtcblxuLy8gR2VuZXJhdGUgYW4gYXJyYXkgdGhhdCBjb250YWlucyB4IG51bSBvZiByYW5kb20gbnVtYmVyc1xuZnVuY3Rpb24gZ2VuZXJhdGVOdW0obnVtKSB7XG4gICAgY29uc3QgcmFuZG9tID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbnVtOyBpKyspe1xuICAgICAgICByYW5kb20ucHVzaChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tO1xufVxuXG5cbi8vIFVzYWdlIHRlc3RlXG5jb25zdCBteVRyZWUgPSBuZXcgVHJlZShnZW5lcmF0ZU51bSg5OSkpO1xubXlUcmVlLnByZXR0eVByaW50KCk7XG5jb25zb2xlLmxvZyhteVRyZWUuaXNCYWxhbmNlZCgpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5sZXZlbE9yZGVyKCkpO1xuY29uc29sZS5sb2cobXlUcmVlLmluT3JkZXIobXlUcmVlLnJvb3QpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5wcmVPcmRlcihteVRyZWUucm9vdCkpO1xuY29uc29sZS5sb2cobXlUcmVlLnBvc3RPcmRlcihteVRyZWUucm9vdCkpO1xubXlUcmVlLmluc2VydCgyMDAsIG15VHJlZS5yb290KTtcbm15VHJlZS5pbnNlcnQoMTY0LCBteVRyZWUucm9vdCk7XG5teVRyZWUuaW5zZXJ0KDE1MywgbXlUcmVlLnJvb3QpO1xuY29uc29sZS5sb2cobXlUcmVlLmlzQmFsYW5jZWQoKSk7XG5teVRyZWUucmViYWxhbmNlKCk7XG5jb25zb2xlLmxvZyhteVRyZWUuaXNCYWxhbmNlZCgpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5sZXZlbE9yZGVyKCkpO1xuY29uc29sZS5sb2cobXlUcmVlLmluT3JkZXIobXlUcmVlLnJvb3QpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5wcmVPcmRlcihteVRyZWUucm9vdCkpO1xuY29uc29sZS5sb2cobXlUcmVlLnBvc3RPcmRlcihteVRyZWUucm9vdCkpO1xuIl0sIm5hbWVzIjpbIk5vZGUiLCJUcmVlIiwiYXJyYXkiLCJfY2xhc3NDYWxsQ2hlY2siLCJyb290IiwiYnVpbGRUcmVlIiwicmVtb3ZlRHVwbGljYXRlIiwic29ydCIsImEiLCJiIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJsZW5ndGgiLCJtaWRJbmRleCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJzbGljZSIsInJpZ2h0IiwiaW5zZXJ0Iiwibm9kZSIsImRhdGEiLCJfZGVsZXRlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwic3VjY1BhcmVudCIsInN1Y2MiLCJmaW5kIiwibGV2ZWxPcmRlciIsImNhbGxiYWNrIiwicXVldWUiLCJyZXN1bHQiLCJjdXJyZW50Iiwic2hpZnQiLCJwdXNoIiwiaW5PcmRlciIsInRyYXZlcnNlIiwicHJlT3JkZXIiLCJwb3N0T3JkZXIiLCJoZWlnaHQiLCJsZWZ0SGVpZ2h0IiwicmlnaHRIZWlnaHQiLCJtYXgiLCJkZXB0aCIsImxldmVsIiwiY291bnQiLCJpc0JhbGFuY2VkIiwibGVmdEgiLCJyaWdodEgiLCJkaWYiLCJhYnMiLCJyZWJhbGFuY2UiLCJzb3J0ZWQiLCJwcmV0dHlQcmludCIsInByZWZpeCIsImlzTGVmdCIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwiZ2VuZXJhdGVOdW0iLCJudW0iLCJyYW5kb20iLCJpIiwicm91bmQiLCJteVRyZWUiXSwic291cmNlUm9vdCI6IiJ9