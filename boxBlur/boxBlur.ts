function boxBlur(image: number[][]): number[][] {
    var sumElement = 0, result,sizeOfImage;
    for(let i = 0; i < image.length; i++)
    {
        for(let j = 0; j < image[0].length; j++)
        {
            sumElement += image[i][j];
        }
    }
    sizeOfImage = image.length * image[0].length;
    result = Math.floor(sumElement/sizeOfImage);
    return [[result]]
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
