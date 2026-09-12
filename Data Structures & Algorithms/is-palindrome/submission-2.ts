class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let backwards = s.replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('').toLowerCase();
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        console.log(backwards)
        console.log(s)

        if (backwards === s) return true

        return false
    }
}
