






class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const bucket: Record<string, number> = {};

        for (let num of nums) {
            if (bucket[num] !== undefined) {
                bucket[num] += 1;
            } else {
                bucket[num] = 1;
            }
        }

        let index = 0

        Object.entries(bucket).forEach(([key, count]) => {
            const numericKey = Number(key);

            console.log(numericKey)

            for (let i = 0; i < count; i++) {
                nums[index] = numericKey;
                index += 1
            }
        });
    }
}
