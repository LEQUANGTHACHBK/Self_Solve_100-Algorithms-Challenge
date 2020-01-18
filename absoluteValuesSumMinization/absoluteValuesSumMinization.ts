function absoluteValuesSumMinimization(a: number[]): number {
    const lengtharray = a.length;
    if (lengtharray % 2 == 0)
        return a[(lengtharray)/2-1]
    else    
        return a[(lengtharray-1)/2]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));