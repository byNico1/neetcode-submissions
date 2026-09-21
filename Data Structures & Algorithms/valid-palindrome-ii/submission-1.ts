class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let l = 0,
            r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                return (
                    this.isPalindrom(s.slice(0, l) + s.slice(l + 1)) ||
                    this.isPalindrom(s.slice(0, r) + s.slice(r + 1))
                );
            }

            l++;
            r--;
        }
        return true;
    }

    isPalindrom(s: string) {
        let l = 0,
            r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) return false;

            l++;
            r--;
        }

        return true;
    }
}
