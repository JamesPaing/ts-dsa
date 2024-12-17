export abstract class Node<T> {
    abstract data: T;

    describe() {
        console.log('I am an Abstract Node');
    }
}
