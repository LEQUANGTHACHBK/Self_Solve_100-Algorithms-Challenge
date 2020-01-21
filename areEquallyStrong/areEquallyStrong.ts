function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    // if(yourLeft == friendsLeft && yourRight == friendsRight)
    //     return true;
    // else if(yourLeft == friendsRight && yourRight == friendsLeft)
    //     return true;
    // return false;
    var yourweakness = yourLeft <= yourRight ? yourLeft:yourRight;
    var yourstrongness = yourLeft >= yourRight ? yourLeft:yourRight;
    var friendweakness = friendsLeft <= friendsRight? friendsLeft: friendsRight;
    var friendstrongness =friendsLeft >= friendsRight ? friendsLeft: friendsRight;
    if(yourweakness == friendweakness && yourstrongness == friendstrongness)
    {
        return true;
    }
    return false;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
