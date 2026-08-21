class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let pre = 1
        let post = 1
        const result = []

        for (let i in nums) {
            if (result.length === 0) result.push(1)
            if (nums.length - 1 === Number(i)) break
            result.push(pre * nums[i])
            pre = pre * nums[i]
        }

        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] = post * result[j]
            post = post * nums[j]
        }

        return result
        
        // for i each number of nums
            // if result is empty initialize with 1
            // else
                // if nums.length - 1 = i return
                // push  prefix * number
                // pre = pre * nums[i]
        
        // for j each number of nums
            // if result.length - 1 = j return
            // result j = post * result[j]
            // post = post * nums[j]
    }
}
