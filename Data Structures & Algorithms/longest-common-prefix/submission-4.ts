class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let result = ""
        const firstWord = strs[0];

        for (let letterIdx = 0; letterIdx < firstWord.length; letterIdx++) {
            let letter = firstWord[letterIdx]
            for (let str of strs) {
                if (str[letterIdx] !== firstWord[letterIdx]) return result 
            }
            result += letter
        }

        return result
    }
}
