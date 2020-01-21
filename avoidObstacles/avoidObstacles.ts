function avoidObstacles(inputArray: number[]): number {
    var maxvalue = inputArray.sort()[inputArray.length-1];
    for(let i = 1; i <= maxvalue; i++)
    {
        let result;
        result = inputArray.every(function(element, index, array){
            return element % i != 0;
        })
        if(result === true)
            return i;
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));