"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    describe() {
        console.log('I am Linked List Node');
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
    insert(item) {
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
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return count;
    }
    traverse(cb, ...rest) {
        let current = this.head;
        if (!current)
            return false;
        while (current) {
            cb(current.data, ...rest);
            current = current.next;
        }
        return true;
    }
}
exports.LinkedList = LinkedList;
