function addBorder(picture: string[]): string[] {
    var lengthOfElement = picture[0].length;
    var stringStart = '*'.repeat(5);
    
    var picture1 = picture.map((x)=>'*'+ x +'*');
    picture1.splice(0,0,stringStart);
    picture1.splice(lengthOfElement,0,stringStart);
    return picture1;
}

console.log(addBorder(["abc", "ded"]));