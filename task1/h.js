//Rotate an array by k times

const arr = [1,2,3,4,5,6,7,8];
const k = 3




//Anonymous Function

const sel = arr.splice(arr.length-(k) , arr.length);
//console.log(sel)   // [5,6,7]

const calling = function(arr){

for (i=sel.length-1;i>=0;i--){
    arr.unshift(sel[i])
}
console.log(arr)
}

calling(arr)  // OUTPUT : [ 6, 7, 8, 1, 2, 3, 4, 5 ]





// Using IIFE


const rotatedArray = (() => {
    const rotate = (arr, times) => {
        const n = arr.length;
        const rotations = times % n;
        return arr.slice(rotations).concat(arr.slice(0, rotations));
    };

    return rotate(array, k);
})();

console.log(rotatedArray); // Output: [ 6, 7, 8, 1, 2, 3, 4, 5 ]

