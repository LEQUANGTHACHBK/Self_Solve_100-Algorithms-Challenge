function arrayPreviousLess(items: number[]): number[] {
    let reslt = items.map((e,i)=>{
        if(i==0 || items[i-1]>=items[i]){
            return -1;
        }
        else{
            return items[i-1]
        }
    })
    return reslt
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));