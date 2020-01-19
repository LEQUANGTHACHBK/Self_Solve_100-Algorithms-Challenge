function alphabetSubsequence(s: string): boolean {
    for(let i = 0; i < s.length-1; i++)
    {
        for(let j = i+1; j < s.length-1; j++)
        {
            if(s[j].charCodeAt(0) <= s[i].charCodeAt(0))
            {
                return false;
            }
        }
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
