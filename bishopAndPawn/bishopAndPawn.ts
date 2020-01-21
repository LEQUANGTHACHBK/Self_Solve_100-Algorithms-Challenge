function bishopAndPawn(bishop: string, pawn: string): boolean {
    let x1 = bishop[0].charCodeAt(0), x2 = bishop[1], y1 = pawn[0].charCodeAt(0),y2 = pawn[1];
    let k = x1 > y1 ? x1-y1:y1-x1;
    return Math.abs(parseInt(y2)-parseInt(x2)) == k ? true:false;
}

console.log(bishopAndPawn('c1', 'h6'));