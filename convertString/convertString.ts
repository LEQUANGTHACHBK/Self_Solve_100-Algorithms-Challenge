function convertString(s: string, t: string): boolean {
    let Word = '';
    let tIndex = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] === t[tIndex])
        {
            Word = Word.concat(s[i]);
            tIndex++;
            if(Word === t)
            {
                return true;
            }
        }
    }
    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
