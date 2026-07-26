class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagram = {}
        for (let str of strs) {
            let count = Array(26).fill(0)

            for (let char of str) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0); 
                count[index] += 1;
            }

            let countKey = count.join('-')

            if (anagram[countKey] === undefined) anagram[countKey] = []
            
            anagram[countKey].push(str)
        }

        return Object.values(anagram)
    }
}


