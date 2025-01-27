// class Node {
//     constructor(val) {
//         this.val = val;
//         this.children = [];
//     }
// }

// let amy = new Node('amy');

// let bob = new Node('bob');
// let barb = new Node('barb');
// let barry = new Node('barry');

// amy.children.push(bob);
// amy.children.push(barb);
// amy.children.push(barry);

// another way to implement the above where we can pass children in right away
class Node {
    constructor(val, children=[]) {
        this.val = val;
        this.children = children;
    }
    findDFS(val) {
        const toVisitStack = [this];
        while(toVisitStack.length) {
            const current = toVisitStack.pop();
            console.log("Visiting:", current.val)
            if (current.val === val) {
                return current;    
            }
            for (let child of current.children) {
                toVisitStack.push(child)
            }
        }
    }
    findBFS(val) {
        const toVisitQueue = [this];
        while(toVisitQueue.length) {
            const current = toVisitQueue.shift();
            console.log("Visiting:", current.val)
            if (current.val === val) {
                return current;    
            }
            for (let child of current.children) {
                toVisitQueue.push(child)
            }
        }
    }
}

let amy = new Node('amy', [new Node('bob'), new Node('barb'), new Node ('barry')])
let htmlEl = new Node('html', [new Node('head', [new Node('title'), new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])])])])

//Tree class

class Tree {
    constructor(root) {
        this.root = root;    
    }
    findInTreeDFS(val) {
        return this.root.findDFS(val)
    }
    findInTreeBFS(val) {
        return this.root.findBFS(val)
    }
}
