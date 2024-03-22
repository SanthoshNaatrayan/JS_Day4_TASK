// Return all the primenumbers in an array 
// (Natural numbers that are divisible only by 1 and itself are called primenumbers)

var arr = [56,87,24,887,645]

// Using Arrow Function

let prime=[];
let composite =[];

let calling = (arr)=>{
    for (i=0;i<arr.length;i++){
        if(arr[i] === 1 || arr[i] === 2 || arr[i] === 3){
         prime.push(arr[i])
        }
        else if (arr[i]%2 !== 0 && arr[i]%3 !== 0){
            prime.push(arr[i])
        }
        else {
           composite.push(arr[i])
        }
    }
    }
    calling(arr);
    console.log(prime)


