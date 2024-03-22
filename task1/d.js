// Return all the primenumbers in an array 
// (Natural numbers that are divisible only by 1 and itself are called primenumbers)

 var arr = [1,2,3,4,5,6,7,8,9,79,99]

 // USING Anonymous Function

let prime=[];
let composite =[];

let calling = function(arr){
for (num of arr){
    if(num === 1 || num=== 2 || num === 3){
     prime.push(num)
    }
    else if (num%2 !== 0 && num%3 !== 0){
        prime.push(num)
    }
    else {
       composite.push(num)
    }
}
}
calling(arr);
console.log(prime)


// Using IIFE

let prime1=[];
let composite1 =[];

 (function(){
    for (i=0;i<arr.length;i++){
        if(arr[i] === 1 || arr[i] === 2 || arr[i] === 3){
         prime1.push(arr[i])
        }
        else if (arr[i]%2 !== 0 && arr[i]%3 !== 0){
            prime1.push(arr[i])
        }
        else {
           composite1.push(arr[i])
        }
    }
    console.log(prime1)
})();




