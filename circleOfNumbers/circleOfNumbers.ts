function circleOfNumbers(n: number, firstNumber: number): number {
    var numberOfPair = (n)/2;
    
    var differenceEachPair = sum(n/2,n-1)-sum(0,n/2-1)
    return differenceEachPair/numberOfPair + firstNumber;
}
function sum(s:number,e:number){
    var total = 0;
    for(let i = s; i<=e;i++)
    {
        total += i;
    }
    return total
}

console.log(circleOfNumbers(10, 2));