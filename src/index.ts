import { LinkedList } from './data-structures/linked-list';

const linkedNumList = new LinkedList<number>();

linkedNumList.insert(2);
linkedNumList.insert(4);
linkedNumList.insert(6);
linkedNumList.insert(8);
linkedNumList.insert(10);

linkedNumList.traverse(function (num) {
    console.log(2 * num);
});
