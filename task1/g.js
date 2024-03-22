// Remove duplicates from an array



// Using Anonymous Function

let array1 = [1, 2, 3, 4, 2, 3, 5];

let uniqueArray1 = array.filter(function(value, index, self) {
    return self.indexOf(value) === index;
});

console.log(uniqueArray1);



// Using IIFE


let array2 = [1, 2, 3, 4, 2, 3, 5];

let uniqueArray2 = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(array2);

console.log(uniqueArray2); // Output: [1, 2, 3, 4, 5]


