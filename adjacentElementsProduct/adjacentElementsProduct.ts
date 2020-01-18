function adjacentElementsProduct(inputArray: number[]): number {
    var output = [];
    for(var i = 0; i < inputArray.length-1; i++){
        output.push(inputArray[i] * inputArray[i+1]);
    }
    var maxNumber = output[0];
    output.forEach((x)=>{
        if(x>=maxNumber)
            maxNumber = x;
    })
    return maxNumber
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));