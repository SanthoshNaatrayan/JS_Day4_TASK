// QUESTION : Sum of all numbers in an array

// First i take an array with different numbers for example
var arr = [50,67,84,32,95];

// Using ANONYMOUS FUNCTION
let sum =0;
let result = function(arr){
    for(num of arr){
     sum+=num
}
}
result(arr);
console.log(sum);


// Using IIFE

let sum1 =0;
(function(){
    for(num of arr){
     sum1+=num
}
console.log(sum1);

})();


