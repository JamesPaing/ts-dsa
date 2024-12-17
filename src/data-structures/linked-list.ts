import { Node } from './node';

class LLNode<T> implements Node<T> {
    data: T;
    next: LLNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }

    describe(): void {
        console.log('I am Linked List Node');
    }
}

export class LinkedList<T> {
    private head: LLNode<T> | null = null;
    private tail: LLNode<T> | null = null;

    insert(item: T) {
        const newNode = new LLNode(item);

        // if no head, set head
        if (!this.head) {
            this.head = newNode;
        }

        // if no tail, set tail, set head's next
        else if (!this.tail) {
            this.tail = newNode;
            this.head.next = newNode;
        }

        // else, set current tail's next, set tail
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return newNode.data;
    }

    count() {
        let current = this.head;
        let count = 0;

        // if empty, return 0
        if (!current) {
            return count;
        }

        // while current exists
        while (current) {
            count++;
            // current becomes current's next
            current = current?.next;
        }

        return count;
    }

    traverse(cb: (val: T, ...rest: unknown[]) => void, ...rest: unknown[]) {
        let current = this.head;

        if (!current) return false;

        while (current) {
            cb(current.data, ...rest);
            current = current.next;
        }

        return true;
    }

    // bulkInsert()
    // insertHead()
    // insertTail()
    // removeFirst()
    // removeTail()
    // remove()
    // removeAll() - remove a list/array of items from the LinkedList
    // contains() - check to see if the LinkedList contains an item
    // contains() - clear all items in the LinkedList
}
