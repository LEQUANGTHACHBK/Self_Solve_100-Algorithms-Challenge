function allLongestStrings(inputArray: string[]): string[] {
    inputArray.sort((a:string,b:string)=>{
        return a.length - b.length;
    })
    const result = inputArray.filter(a=>a.length == inputArray[inputArray.length-1].length)
    return result;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "addc", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aaaa", "ad", "vcd", "abaa"]));