class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let i = 0, j = 0
        
        let result = [];

        while (i < word1.length && j < word2.length) {
            result.push(word1[i])
            result.push(word2[j])
            i += 1
            j += 1
        }
        result.push(word1.slice(i))
        result.push(word2.slice(j))
        return(result.join(''))
    }
}
