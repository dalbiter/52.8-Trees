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
    find(val) {
        const toVisitStack = [this];
        while(toVisitStack.length) {
            const current = toVisitStack.pop();
            if (current.val === val) {
                return current;    
            }
            for (let child of current.children) {
                toVisitStack.push(child)
            }
        }
    }
}

let amy = new Node('amy', [new Node('bob'), new Node('barb'), new Node ('barry')])
let htmlEl = new Node('html', [new Node('head', [new Node('title'), new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])])])])

//tree traversal depth first search
const sal = {
    hobbies: {
        sailing: ['dingy', 'keel'],
        cooking: 'salad'
    }
}