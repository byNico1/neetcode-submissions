class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let l = 0,
            i = 0,
            r = nums.length - 1;

        function swap(x: number, i: number) {
            let temp = nums[x];
            nums[x] = nums[i];
            nums[i] = temp;
        }

        while (i <= r) {
            if (nums[i] === 0) {
                swap(i, l);
                l += 1;
            }
            if (nums[i] === 2) {
                swap(i, r);
                r -= 1;
                i -= 1
            }

            i += 1;
        }
    }
}
