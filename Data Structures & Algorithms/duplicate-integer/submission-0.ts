class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const counter = new Set()
        let areDuplicates = false

        for (const num of nums) {
            if (counter.has(num)) {
                return true
            } else {
                counter.add(num)
            }
        }

        return areDuplicates
    }
}
