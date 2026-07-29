class ListNode {
    key: number;
    next: ListNode | null;

    constructor(key: number) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    private set: ListNode[]
    
    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    hash(key) {
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        let index = this.set[this.hash(key)];
        while (index.next) {
            if (index.next.key === key) return;

            index = index.next;
        }
        index.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let index = this.set[this.hash(key)];
        while (index.next) {
            if (index.next.key === key) {
                index.next = index.next.next;
                return;
            }

            index = index.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        let index = this.set[this.hash(key)];
        while (index.next) {
            if (index.next.key === key) return true;

            index = index.next;
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
