class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const comp = Math.floor(nums.length / 3);

        const counter = new Map();
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (counter.get(nums[i])) counter.set(nums[i], counter.get(nums[i]) + 1);
            if (!counter.get(nums[i])) counter.set(nums[i], 1);

            if (counter.get(nums[i]) > comp && !result.includes(nums[i])) result.push(nums[i])
        }

        console.log(counter)

        return result
    }
}
