function arrayChange(inputArray: number[]): number {
    var count = 0;
    for(let i = 0; i < inputArray.length; i++)
    {
        if(inputArray[i+1]<=inputArray[i])
        {
            let different = inputArray[i] + 1 - inputArray[i+1];
            count += different;
            inputArray[i+1] = inputArray[i] + 1;
        }
    }
    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 1, 1, 1]));