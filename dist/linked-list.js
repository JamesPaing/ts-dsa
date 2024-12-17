"use strict";
var DataStrctureAndAlgorithm;
(function (DataStrctureAndAlgorithm) {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class LinkedList {
        constructor() {
            this._first = null;
            this._last = null;
            // removeAll() - remove a list/array of items from the LinkedList
            // contains() - check to see if the LinkedList contains an item
            // contains() - clear all items in the LinkedList
        }
        set first(item) {
            // get a shollow copy of first
            let existingFirst = Object.assign({}, this._first);
            // set first
            this._first = item;
            // if previous first exists
            if (existingFirst) {
                this._first.next = existingFirst;
            }
        }
        get first() {
            return this._first;
        }
        set last(item) {
            // set item as last item's next
            if (this.last) {
                this.last.next = item;
            }
            // set item as last item
            this._last = item;
        }
        get last() {
            return this._last;
        }
        removeFirst() {
            let first = this.first;
            // set next item as first
            if (first === null || first === void 0 ? void 0 : first.next) {
                let newFirst = first.next;
                this.first = newFirst;
                return this.first;
            }
            if (first) {
                this._first = null;
            }
            return first;
        }
        removeLast() {
            let last = Object.assign({}, this.last);
            this._last = null;
            return last;
        }
        addAll(arr) {
            let last = this.last;
            if (!last) {
                return null;
            }
            for (let i = 0; i < arr.length; i++) {
                const newNode = new Node(arr[i]);
                last.next = newNode;
                last = newNode;
            }
            return last;
        }
    }
    const linkdedList = new LinkedList();
    const item1 = new Node(6);
    const item2 = new Node(9);
    const item3 = new Node(3);
    const item4 = new Node(5);
    const item5 = new Node(2);
    linkdedList.first = item1;
    console.log(linkdedList);
})(DataStrctureAndAlgorithm || (DataStrctureAndAlgorithm = {}));
