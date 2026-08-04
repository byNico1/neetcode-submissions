class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hash: Record<string, number> = {};
        const result = [];

        nums.forEach((num) => {
            if (hash[num] === undefined) hash[num] = 1;

            hash[num] += 1;
        });

        Object.entries(hash)
            .sort(([akey, avalue], [bkey, bvalue]) => bvalue - avalue)
            .slice(0, k)
            .forEach((arr) => result.push(Number(arr[0])));

        return result;
    }
}
