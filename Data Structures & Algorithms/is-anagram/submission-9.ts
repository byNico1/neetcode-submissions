class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const counterS = {};
        const counterT = {};

        s.split("").forEach((char) => {
            if (counterS[char]) {
                counterS[char] += 1;
            } else {
                counterS[char] = 1;
            }
        });

        t.split("").forEach((char) => {
            console.log("t", char);
            if (counterT[char]) {
                counterT[char] += 1;
            } else {
                counterT[char] = 1;
            }
        });

        for (const char in counterS) {
            if (counterS[char] !== counterT[char]) return false
        }

        return true
    }
}
