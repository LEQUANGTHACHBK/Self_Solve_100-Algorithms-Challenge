function characterParity(symbol: string): string {
   var checkvalue = parseInt(symbol);
   return isNaN(checkvalue) ? 'not a digrit' : checkvalue % 2 == 0 ? 'even number': 'odd number' 
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
