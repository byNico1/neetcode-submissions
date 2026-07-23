class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result = [];
        const numsMap = {};

        for (const column in nums) {
            let rest = target - nums[column];
            if (numsMap[rest] === undefined) {
                let columnValue = nums[column]
                numsMap[columnValue] = column;
            } else {
                result.push(Number(numsMap[rest]), Number(column));
                return result.sort((a, b) => a - b);
            }
        }

        console.log(numsMap)
    }
}
