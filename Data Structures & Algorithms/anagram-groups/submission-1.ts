class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedStrs = strs.map((str) => str.split('').sort().join(''))
        const anagram = {}
        for (let str in sortedStrs) {
            let stringValue = strs[str]
            let anagramValue = sortedStrs[str]

            if (anagram[anagramValue] === undefined) anagram[anagramValue] = []

            anagram[anagramValue].push(stringValue)
        }

        return Object.values(anagram)
    }
}


