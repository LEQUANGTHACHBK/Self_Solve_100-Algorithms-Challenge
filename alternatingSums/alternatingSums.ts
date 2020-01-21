function alternatingSums(a: number[]): number[] {
    var sum1 = 0, sum2 =0;
    var result = [];
    a.forEach((e,i)=>{
        if(i%2==0)
            sum1 += e;
        else    
            sum2 += e;
    });
    result.push(sum1);
    result.push(sum2);
    return  result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))