class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<string, number> = {};
        let freq = Array.from({ length: nums.length + 1}, () => []);

        for (let num of nums) {
            if (count[num] === undefined) {
                count[num] = 1;
            } else {
                count[num] += 1;
            }
        }

        Object.entries(count).forEach(([num, count]) => {
            console.log(count);
            freq[count].push(num);
        });

        let result: number[] = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (let n of freq[i]) {
                result.push(n);
                if (result.length === k) return result;
            }
        }
    }
}
