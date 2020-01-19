function alphabeticShift(inputString: string): string {
    var arrayAlphabet = inputString.split('');
    var resultArray = arrayAlphabet.map((e)=>{
        if(e == 'z')
            return 'a';
        let pos = e.charCodeAt(0);
        pos += 1; 
        return String.fromCharCode(pos);
    })
    var resultstring = resultArray.join('');
    return resultstring;
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abc'));
console.log(alphabeticShift('adc'));