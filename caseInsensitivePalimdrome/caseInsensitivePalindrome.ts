function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString= inputString.toLowerCase();
    let outputString = inputString.split('');
    let result = outputString.reverse().join('');
    return result === inputString ? true: false;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('a'));