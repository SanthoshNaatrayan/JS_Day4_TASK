//Return median of two sorted arrays of the same size.


let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];


//Using Anonymous Function


let median = function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
  };

 console.log(median(arr1,arr2))





 //Using IIFE


let median1 = (function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
})(arr1, arr2);

console.log(median);





