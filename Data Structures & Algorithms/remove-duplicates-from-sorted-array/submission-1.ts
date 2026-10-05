class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let l = 1,
            r = 1;

        while (r < nums.length) {
            if (nums[r] === nums[r - 1]) {
                r += 1
                continue
            }

            nums[l] = nums[r]
            l += 1
            r += 1
        }

        return l;
    }
}
