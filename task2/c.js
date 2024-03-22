// QUESTION : Sum of all numbers in an array

// First i take an array with different numbers for example
var arr = [50,67,84,32,95];

let sum =0;
let result = (arr)=>{
    for(num of arr){
     sum+=num
}
}
result(arr);
console.log(sum);