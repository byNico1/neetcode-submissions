class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = nums1.length - 1,
            j = nums2.length - 1;

        let lastNumIndex = nums1.length - nums2.length - 1;

        while (j >= 0) {
            if (nums1[lastNumIndex] > nums2[j]) {
                nums1[i] = nums1[lastNumIndex];
                lastNumIndex -= 1;
            } else {
                nums1[i] = nums2[j];
                j -= 1;
            }

            i -= 1;
        }
    }
}
