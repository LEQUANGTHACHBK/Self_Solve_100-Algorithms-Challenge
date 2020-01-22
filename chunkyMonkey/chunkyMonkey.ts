function chunkyMonkey(arr: any[], size: number): any[][] {
    var loopTime = Math.round(arr.length/size);
    var arrayResult = [];
    for(let i = 0; i< loopTime; i++)
    {
        var sliceArray = arr.slice(i*size,(i+1)*size);
        arrayResult.push(sliceArray);
    }
    return arrayResult;
    
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 1));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));