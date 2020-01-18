function add(param1: number, param2: number): number {
    return param1 + param2;
}

function add2(...param1: number[]): number {
    // var total = 0 ;
    // param1.forEach((e)=>{
    //     total += e;
    // })
    // return total;
    return param1.reduce((x,y)=>x+y,0)
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

