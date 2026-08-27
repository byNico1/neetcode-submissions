class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const comp = Math.floor(nums.length / 3);

        let counter = new Map();
        const result = [];

        for (const num of nums) {
            counter.set(num, (counter.get(num) || 0) + 1);

            if (counter.size > 2) {
                const newCounter = new Map();

                for (const [key, value] of counter.entries()) {
                    if (value > 1) newCounter.set(key, value - 1);
                }

                counter = newCounter
            }
        }

        for (const [key] of counter.entries()) {
            const freq = nums.filter((num) => num === key).length
            if (freq > comp) result.push(key)
        }

        return result
    }
}
