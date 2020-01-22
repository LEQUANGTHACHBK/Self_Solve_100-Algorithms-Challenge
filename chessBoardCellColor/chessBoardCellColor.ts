function chessBoardCellColor(cell1: string, cell2: string): boolean {
    var x = Math.abs(cell1[0].charCodeAt(0)- cell2[0].charCodeAt(0));
    var y = Math.abs(parseInt(cell1[1])-parseInt(cell2[1]));
    return (x % 2 == 0 && y % 2 == 0) || (x % 2 == 1 && y % 2 == 1)  ? true : false
}

console.log(chessBoardCellColor('A1', 'B6'));
console.log(chessBoardCellColor('B2', 'C2'));
