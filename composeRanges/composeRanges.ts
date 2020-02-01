function composeRanges(nums: number[]): string[] {
    var result = [];
    var start = nums[0];
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i+1]-nums[i] == 1)  
        {
            continue;
        }
        else
        {
            var end = nums[i];
            result.push(start !== end ? start+ '->' + end : start+'');
            start = nums[i+1];
        }

    }
    return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1, 0, 1, 2, 3,4,5,7, 8]));