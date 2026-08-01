class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        this.mergeSort(nums, 0, nums.length - 1)
        return nums
    }

    mergeSort(array: number[], l: number, r: number): number[] {
        if (l === r) return array

        let mid = Math.floor((l + r) / 2)
        this.mergeSort(array, l, mid)
        this.mergeSort(array, mid + 1, r)
        this.merge(array, l, mid, r)

        return array
    }

    merge(nums: number[], l: number, mid: number, r: number) {
        let temp = []
        let i = l
        let j = mid + 1

        while (i <= mid && j <= r) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++])
            } else {
                temp.push(nums[j++])
            }
        }

        while (i <= mid) temp.push(nums[i++])
        while (j <= r) temp.push(nums[j++])

        for (let o = l; o <= r; o++) {
            nums[o] = temp[o - l]
        }
    }
}

// [90, 30, 40, 10, 20, 50, 80]
// L (0,3) R(4, 6)
// L (0, 1) Sort = 30, 90
// L (2, 3) Sort = 10, 40
// 10, 30, 40, 90, 
// L (0, 1) Sort = 20, 50, 80
// L (2, 3) Sort = 10, 40
// 10, 30, 40, 90, 
// L 10
// R (1, 1)
// R 20