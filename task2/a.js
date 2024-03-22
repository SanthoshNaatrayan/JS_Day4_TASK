// QUESTION : Print odd numbers in an array

// First i take an array with different numbers for example
var arr = [1,2,3,4,5,6,7,8,9]

// USING ARROW FUNCTION
let array =[];
let oddnumbers = ()=>{
    for (num of arr){
       if (num%2 !==0) {
        array.push(num)
       }
    }
    console.log(array)
}
oddnumbers(arr) // calling the function to print the odd numbers.
