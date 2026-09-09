class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let j = s.length - 1
        for (let i = 0; i < s.length; i++) {
            if (j <= i) return
            
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp   
            j -= 1
        }
    }
}
