class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let half = nums.length / 2;

        const counter: {string?: number} = {};

        for (let num of nums) {
            if (counter[num] === undefined) {
                counter[num] = 1;
            } else {
                counter[num] += 1;
            }
        }

        console.log(counter)

        console.log(Object.keys(counter).find(k => counter[k] > half))

       

        return Number(Object.keys(counter).find(k => counter[k] > half))
    }
}
