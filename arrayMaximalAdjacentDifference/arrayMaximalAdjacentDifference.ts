function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxAdjacentDifferenceValue = 0;
    for(let i = 0; i < inputArray.length-1; i++)
    {
        let differenceValue = Math.abs(inputArray[i]-inputArray[i+1]);
        maxAdjacentDifferenceValue = maxAdjacentDifferenceValue >= differenceValue ? maxAdjacentDifferenceValue:differenceValue;
    }
    return maxAdjacentDifferenceValue
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));