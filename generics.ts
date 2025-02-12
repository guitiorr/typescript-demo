function getItems<Type> (items : Array<Type>) : Array<Type>{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let concatString = getItems<string>(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);

console.log(concatResult);
console.log(concatString);