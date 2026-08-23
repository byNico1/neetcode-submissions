class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
         if (nums.length === 0) {
            return 0;
        }

        let res = 1
        
        const set = new Set(nums)

        for (let num of nums) {
            if (set.has(num - 1)) continue

            let streak = 1

            while (set.has(num + 1)) {
                streak += 1
                num++
            }

            res = Math.max(res, streak)
        }

        return res
    }
}
