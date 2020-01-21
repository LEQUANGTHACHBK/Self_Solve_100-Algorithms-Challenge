function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   var result = inputArray.map((e)=>{
        return e == elemToReplace ? substitutionElem: e;
   })
   return result;
}

console.log(arrayReplace([1, 2, 1], 1, 3));