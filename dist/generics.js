"use strict";
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let concatString = getItems(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
console.log(concatResult);
console.log(concatString);
