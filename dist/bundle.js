/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*****************************!*\
  !*** ./src/binarySearch.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
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
}(); // Usage
var myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(myTree.root);
myTree.prettyPrint();
console.log(myTree.find(7, myTree.root));
console.log(myTree.levelOrder());
console.log(myTree.inOrder(myTree.root));
console.log(myTree.preOrder(myTree.root));
console.log(myTree.postOrder(myTree.root));
console.log(myTree.height(myTree.find(8, myTree.root)));
console.log(myTree.depth(myTree.find(7, myTree.root)));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDLENBQUM7QUFDcEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUM3QixJQUFJLENBQUMsQ0FBQyxFQUFFNkIsTUFBTSxDQUFDakQsSUFBSSxDQUFDLENBQUM7QUFDeEMyQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDNUIsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNoQ3NCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUNyQixPQUFPLENBQUNxQixNQUFNLENBQUNqRCxJQUFJLENBQUMsQ0FBQztBQUN4QzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUNuQixRQUFRLENBQUNtQixNQUFNLENBQUNqRCxJQUFJLENBQUMsQ0FBQztBQUN6QzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUNsQixTQUFTLENBQUNrQixNQUFNLENBQUNqRCxJQUFJLENBQUMsQ0FBQztBQUMxQzJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUNqQixNQUFNLENBQUNpQixNQUFNLENBQUM3QixJQUFJLENBQUMsQ0FBQyxFQUFFNkIsTUFBTSxDQUFDakQsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN2RDJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNLENBQUNiLEtBQUssQ0FBQ2EsTUFBTSxDQUFDN0IsSUFBSSxDQUFDLENBQUMsRUFBRTZCLE1BQU0sQ0FBQ2pELElBQUksQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0JpbmFyeSBTZWFyY2gvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9CaW5hcnkgU2VhcmNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JpbmFyeSBTZWFyY2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JpbmFyeSBTZWFyY2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9CaW5hcnkgU2VhcmNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQmluYXJ5IFNlYXJjaC8uL3NyYy9iaW5hcnlTZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNsYXNzIFRyZWUge1xuICAgIC8vIENvbnN0cnVjdG9yIGluaXRpYWxpemVzIHRoZSB0cmVlIHdpdGggYSBzb3J0ZWQgYXJyYXksIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAgICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZSh0aGlzLnJlbW92ZUR1cGxpY2F0ZShhcnJheSkuc29ydCgoYSwgYikgPT4gYSAtIGIpKTsgLy8gU29ydCB0aGUgYXJyYXkgYnkgZGVsZXRpbmcgZHVwbGljYXRlcyBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGJ1aWxkIGEgYmFsYW5jZWQgYmluYXJ5IHNlYXJjaCB0cmVlXG4gICAgYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBtaWRkbGUgZWxlbWVudCBvZiB0aGUgYXJyYXkgYXMgcm9vdFxuICAgICAgICBjb25zdCBtaWRJbmRleCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShhcnJheVttaWRJbmRleF0pO1xuXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGRvIHRoZSBzYW1lIHRvIHRoZSBsZWZ0IGhhbGYgYW5kIHJpZ2h0IGhhbGZcbiAgICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXkuc2xpY2UoMCwgbWlkSW5kZXgpKTtcbiAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LnNsaWNlKG1pZEluZGV4ICsgMSkpO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBpbnNlcnQgYSB2YWx1ZSBpbnRvIHRoZSB0cmVlXG4gICAgaW5zZXJ0KHZhbHVlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuZGF0YSA8IHZhbHVlKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gZGVsZXRlIGEgbm9kZSB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgZnJvbSB0aGUgdHJlZVxuICAgIGRlbGV0ZSh2YWx1ZSwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWN1cnNpdmUgY2FsbHMgZm9yIGFuY2VzdG9ycyBvZiBub2RlIHRvIGJlIGRlbGV0ZWRcbiAgICAgICAgaWYgKG5vZGUuZGF0YSA+IHZhbHVlKSB7XG4gICAgICAgICAgICBub2RlLmxlZnQgPSB0aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9IGlmIChub2RlLmRhdGEgPCB2YWx1ZSkge1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZSBjaGlsZHJlbiBpcyBlbXB0eVxuICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5yaWdodDtcbiAgICAgICAgfSBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGJvdGggY2hpbGRyZW4gZXhpc3RcbiAgICAgICAgbGV0IHN1Y2NQYXJlbnQgPSBub2RlO1xuXG4gICAgICAgIC8vIEZpbmQgc3VjY2Vzc29yXG4gICAgICAgIGxldCBzdWNjID0gbm9kZS5yaWdodDtcbiAgICAgICAgd2hpbGUgKHN1Y2MubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY1BhcmVudCA9IHN1Y2M7XG4gICAgICAgICAgICBzdWNjID0gc3VjYy5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Y2NQYXJlbnQgIT09IG5vZGUpIHtcbiAgICAgICAgICAgIHN1Y2NQYXJlbnQubGVmdCA9IHN1Y2MucmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWNjUGFyZW50LnJpZ2h0ID0gc3VjYy5yaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgU3VjY2Vzc29yIERhdGEgdG8gcm9vdFxuICAgICAgICBub2RlLmRhdGEgPSBzdWNjLmRhdGE7XG5cbiAgICAgICAgLy8gRGVsZXRlIFN1Y2Nlc3NvciBhbmQgcmV0dXJuIHJvb3RcbiAgICAgICAgc3VjYyA9IG51bGw7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBmaW5kIGEgbm9kZSB3aXRoIGEgc3BlY2lmaWMgdmFsdWUgaW4gdGhlIHRyZWVcbiAgICBmaW5kKHZhbHVlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5kYXRhICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZGF0YSA8IHZhbHVlXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZpbmQodmFsdWUsIG5vZGUucmlnaHQpXG4gICAgICAgICAgICAgICAgOiB0aGlzLmZpbmQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLy8gVHJhdmVyc2UgdGhlIHRyZWUgaW4gbGV2ZWwgb3JkZXIgYW5kIGV4ZWN1dGUgYSBjYWxsYmFjayBmdW5jdGlvbiBvbiBlYWNoIG5vZGVcbiAgICBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gW107XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5sZWZ0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gaW5vcmRlciBcbiAgICBpbk9yZGVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2subGVmdCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suZGF0YSk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2sucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cmF2ZXJzZShjYWxsYmFjaykpIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gcHJlb3JkZXJcbiAgICBwcmVPcmRlcihjYWxsYmFjaykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiB0cmF2ZXJzZShjYWxsYmFjayl7XG4gICAgICAgICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2FsbGJhY2suZGF0YSk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2subGVmdCk7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2FsbGJhY2sucmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRyYXZlcnNlKGNhbGxiYWNrKSkgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBwb3N0b3JkZXJcbiAgICBwb3N0T3JkZXIoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhdmVyc2UoY2FsbGJhY2spe1xuICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNhbGxiYWNrLmxlZnQpO1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNhbGxiYWNrLnJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjYWxsYmFjay5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0cmF2ZXJzZShjYWxsYmFjaykpIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBnaXZlbiBub2RlXG4gICAgaGVpZ2h0KG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybiAtMTtcbiAgICAgICAgY29uc3QgbGVmdEhlaWdodCA9IHRoaXMuaGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gdGhpcy5oZWlnaHQobm9kZS5yaWdodCk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGRlcHRoIG9mIHRoZSBnaXZlbiBub2RlXG4gICAgZGVwdGgobm9kZSwgcm9vdCA9IHRoaXMucm9vdCwgbGV2ZWwgPSAwKSB7XG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHJvb3QuZGF0YSA9PT0gbm9kZS5kYXRhKSByZXR1cm4gbGV2ZWw7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5kZXB0aChub2RlLCByb290LmxlZnQsIGxldmVsICsgMSk7XG4gICAgICAgIGlmKGNvdW50ICE9PSAwKSByZXR1cm4gY291bnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcHRoKG5vZGUsIHJvb3QucmlnaHQsIGxldmVsICsgMSk7XG4gICAgfVxuXG4gICAgLy8gUHJpbnQgdGhlIHRyZWUgaW4gYSByZWFkYWJsZSBmb3JtYXQgKHByZW9yZGVyKVxuICAgIHByZXR0eVByaW50KG5vZGUgPSB0aGlzLnJvb3QsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgbmV3IHNvcnRlZCBhcnJheSBieSBkZWxldGluZyBkdXBsaWNhdGUgZWxlbWVudHNcbiAgICByZW1vdmVEdXBsaWNhdGUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbiAgICB9XG59XG5cbi8vIFVzYWdlXG5jb25zdCBteVRyZWUgPSBuZXcgVHJlZShbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdKTtcbmNvbnNvbGUubG9nKG15VHJlZS5yb290KTtcbm15VHJlZS5wcmV0dHlQcmludCgpO1xuY29uc29sZS5sb2cobXlUcmVlLmZpbmQoNywgbXlUcmVlLnJvb3QpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5sZXZlbE9yZGVyKCkpO1xuY29uc29sZS5sb2cobXlUcmVlLmluT3JkZXIobXlUcmVlLnJvb3QpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5wcmVPcmRlcihteVRyZWUucm9vdCkpO1xuY29uc29sZS5sb2cobXlUcmVlLnBvc3RPcmRlcihteVRyZWUucm9vdCkpO1xuY29uc29sZS5sb2cobXlUcmVlLmhlaWdodChteVRyZWUuZmluZCg4LCBteVRyZWUucm9vdCkpKTtcbmNvbnNvbGUubG9nKG15VHJlZS5kZXB0aChteVRyZWUuZmluZCg3LCBteVRyZWUucm9vdCkpKTtcbiJdLCJuYW1lcyI6WyJOb2RlIiwiX2NyZWF0ZUNsYXNzIiwiZGF0YSIsIl9jbGFzc0NhbGxDaGVjayIsInJpZ2h0IiwibGVmdCIsIlRyZWUiLCJhcnJheSIsInJvb3QiLCJidWlsZFRyZWUiLCJyZW1vdmVEdXBsaWNhdGUiLCJzb3J0IiwiYSIsImIiLCJrZXkiLCJ2YWx1ZSIsImxlbmd0aCIsIm1pZEluZGV4IiwiTWF0aCIsImZsb29yIiwic2xpY2UiLCJpbnNlcnQiLCJub2RlIiwiX2RlbGV0ZSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInN1Y2NQYXJlbnQiLCJzdWNjIiwiZmluZCIsImxldmVsT3JkZXIiLCJjYWxsYmFjayIsInF1ZXVlIiwicmVzdWx0IiwiY3VycmVudCIsInNoaWZ0IiwicHVzaCIsImluT3JkZXIiLCJ0cmF2ZXJzZSIsInByZU9yZGVyIiwicG9zdE9yZGVyIiwiaGVpZ2h0IiwibGVmdEhlaWdodCIsInJpZ2h0SGVpZ2h0IiwibWF4IiwiZGVwdGgiLCJsZXZlbCIsImNvdW50IiwicHJldHR5UHJpbnQiLCJwcmVmaXgiLCJpc0xlZnQiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsIm15VHJlZSJdLCJzb3VyY2VSb290IjoiIn0=