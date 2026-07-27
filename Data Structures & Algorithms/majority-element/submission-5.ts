class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let counter = 0;
        let result;

        for (let num of nums) {
            if (result === undefined || counter === 0) result = num;

            if (num !== result) {
                counter -= 1;
            } else {
                counter += 1;
            }
        }

        console.log(counter);
        console.log(result);

        return result;
    }
}
