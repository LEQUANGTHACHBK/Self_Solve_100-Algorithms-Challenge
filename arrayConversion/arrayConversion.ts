function arrayConversion(inputArray: number[]): number {
    var isOdd = true;
    while(inputArray.length !== 1)
    {
        inputArray = sumproduct(inputArray,isOdd);
        isOdd = !isOdd;
    }
    return inputArray[0];
}
function sumproduct(inputArray:number[],isOdd:boolean)
{
    const sumproducts = [];
    if(isOdd){
        for(let i = 0; i<inputArray.length; i=i+2)
        {
            sumproducts.push(inputArray[i]+inputArray[i+1]);
        }
    }
    else{
        for(let i = 0; i<inputArray.length; i=i+2)
        {
            sumproducts.push(inputArray[i]*inputArray[i+1]);
        }
    }
    return sumproducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
