function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    var maxvalue ;
    var arrayvalue = [];
    for(let i = 0; i< inputArray.length-k+1; i++)
    {
        let sum =0;
        for(let j = i; j<i+k ; j++)
        {
            sum += inputArray[j];
        }
        arrayvalue.push(sum);
    }
    maxvalue = Math.max(...arrayvalue);
    return maxvalue;
    
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));