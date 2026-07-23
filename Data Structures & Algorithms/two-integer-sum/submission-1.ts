class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result = []

        for (const aColumn in nums) {
            let a = nums[aColumn];
            console.log(a)


            for (const bColumn in nums) {
                let b = nums[bColumn];
                console.log(b)

                if (aColumn === bColumn) continue

                if (a + b === target) {
                    result.push(Number(aColumn), Number(bColumn))
                    return result.sort((a,b) => a - b)
                }
            }
        }
    }
}
