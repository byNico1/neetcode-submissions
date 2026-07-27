class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0;

        for (let num in nums) {
            if (nums[num] !== val) {
                nums[k] = nums[num];
                k += 1;
            }
        }
        return k;
    }
}
