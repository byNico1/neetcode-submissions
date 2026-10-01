class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        // if word 1 is larger than word 2
        // For each letter of word1
        // if word2[index] === undefined
        // return string += word1[index] to end
        // push to result word1 letter then word 2 letter
        let result = "";

        if (word1.length >= word2.length) {
            for (let i = 0; i < word1.length; i++) {
                if (word2[i] === undefined) {
                    return (result += word1.slice(i));
                }

                result += word1[i];
                result += word2[i];
            }

            return result;
        }

        for (let i = 0; i < word2.length; i++) {
            if (word1[i] === undefined) {
                return (result += word2.slice(i));
            }
            result += word1[i];
            result += word2[i];
        }
        return result;
    }
}
