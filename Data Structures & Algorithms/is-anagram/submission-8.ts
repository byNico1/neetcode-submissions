class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        function compareObjects(obj1, obj2) {
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            // Check if both objects have the same keys
            if (keys1.length !== keys2.length) return false;

            for (let key of keys1) {
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            return true; // Objects are equal
        }

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

        return compareObjects(counterS, counterT);
    }
}
