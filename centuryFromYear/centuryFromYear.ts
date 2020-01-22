function centuryFromYear(year: number): number {
    return year % 100 !=0 ? Math.floor(year/100) + 1 : year/100;
}
console.log(centuryFromYear(1450));
console.log(centuryFromYear(2001));