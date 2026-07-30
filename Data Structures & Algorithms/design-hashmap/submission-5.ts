class ListNode {
    set: [number, number];
    next: ListNode | null;

    constructor(key: number = -1, value: number = -1) {
        this.set = [key, value];
        this.next = null;
    }
}

class MyHashMap {
    private set: ListNode[];

    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode());
    }

    hash(key: number) {
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let index = this.set[this.hash(key)];
        while (index.next) {
            if (index.next.set[0] === key) {
                index.next.set[1] = value;
                return;
            }

            index = index.next;
        }

        index.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        let index = this.set[this.hash(key)];
        while (index.next) {
            if (index.next.set[0] === key) return index.next.set[1];

            index = index.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let index = this.set[this.hash(key)];
        while (index.next) {
            if (index.next.set[0] === key) {
                index.next = index.next.next;
                return;
            }

            index = index.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
