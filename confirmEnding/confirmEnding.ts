function confirmEnding(str: string, target: string) {
//    return str.endsWith(target);
    var indexOfTarget = str.indexOf(target);
    var headString = str.slice(0,indexOfTarget);
    return headString + target === str ?true:false;    
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("thach","ach"))