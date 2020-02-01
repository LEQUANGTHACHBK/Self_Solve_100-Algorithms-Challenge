function crossingSum(matrix: number[][], a: number, b: number): number {
    let total =  matrix[a].reduce(function(acc,currentValue,currentIndex,array){
        return acc + currentValue;
    });
    for(let i = 0; i< matrix.length; i++){
        total += i == a? 0: matrix[i][b];
    }
    return total;
}

console.log(crossingSum([[1, 1, 1, 1], 
                         [2, 2, 2, 2], 
                         [3, 3, 3, 3]], 1, 3));
