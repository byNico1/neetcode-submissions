class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (let str of strs) {
            result += str.length + "-";

            str.split("").forEach((char) => {
                result += String.fromCharCode(char.charCodeAt(0) - "A".charCodeAt(0));
            });
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "-") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            let decodedWord = [];
            let word = str.substring(j + 1, j + 1 + length);

            word.split("").forEach((char) =>
                decodedWord.push(String.fromCharCode(char.charCodeAt(0) + "A".charCodeAt(0))),
            );

            result.push(decodedWord.join(""));
            i = j + 1 + length;
        }

        return result;
    }
}
