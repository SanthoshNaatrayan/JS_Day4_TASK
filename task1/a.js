// QUESTION : Print odd numbers in an array

// First I take an array with different numbers for example
var arr = [1,2,3,4,5,6,7,8,9]

// Using ANONYMOUS FUNCTION
let array =[]
let oddnumbers = function(arr){
for (num of arr){
    if (num%2!==0){
        array.push(num)
    }
}
console.log(array)
}
oddnumbers(arr) // calling the function to print the odd numbersin an array.



// USING Immediately Invoked Function Expressions (IIFE)

let array1 =[]
(function() {
    for (num of arr){
        if (num%2 !==0) {
         array1.push(num)
        }
    }
    console.log(array1)
})();
