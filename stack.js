class Stack {
    constructor() {
        this.items = [];
    }

    add(elememnt) {
        return this.items.push(elememnt);
    }

    remove() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        return this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

let stack = new Stack();
console.log(stack.items);

stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
console.log(stack.items);

console.log(stack.remove());
console.log(stack.items);
console.log(stack.peek());
stack.add(5);
console.log(stack.items);
console.log(stack.size());
console.log(stack.clear());
console.log(stack.isEmpty());