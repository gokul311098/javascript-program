class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }

    dequeue() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        return this.items = [];
    }
}

let queue = new Queue();
console.log(queue.items);

queue.enqueue(1);
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(3);
console.log(queue.items);

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.clear());