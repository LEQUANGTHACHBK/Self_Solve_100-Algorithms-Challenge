function areSimilar(a: number[], b: number[]): boolean {
   a.sort();
   b.sort();
   for(let i = 0; i <a.length-1; i++)
   {
        if(a[i] != b[i])
            return false;
   }
   return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
