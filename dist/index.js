"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./data-structures/linked-list");
const linkedNumList = new linked_list_1.LinkedList();
linkedNumList.insert(2);
linkedNumList.insert(4);
linkedNumList.insert(6);
linkedNumList.insert(8);
linkedNumList.insert(10);
linkedNumList.traverse(function (num) {
    console.log(2 * num);
});
