function commonCharacterCount(s1: string, s2: string): number {
    var s1CharArray = s1.split('');
    var s2CharArray = s2.split('');
    const s1CharCount = getCharList(s1CharArray);
    const s2CharCount = getCharList(s2CharArray);
    let total = 0;
    for(let property in s1CharCount){
        if(s2CharCount.hasOwnProperty(property))
        {
            if(s2CharCount[property]>s1CharCount[property])
            {
                total += s1CharCount[property];
            }
            else
            {
                total += s2CharCount[property];
            }
        }
    }
    return total;

}
function getCharList(charlist: string[]): object{
    const wordCount = {};
    for(let i = 0; i < charlist.length; i++)
    {
        if(wordCount.hasOwnProperty(charlist[i]))
        {
            wordCount[charlist[i]] +=1;
        }else{
            wordCount[charlist[i]] = 1;
        }
    }
    return wordCount;

}
console.log(commonCharacterCount('aaabcc', 'adcaa'));
console.log(commonCharacterCount('aba', 'baa'));