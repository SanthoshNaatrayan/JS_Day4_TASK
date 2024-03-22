// Return all the palindromes in an array

//Using Anonymous function


const arrstrng =["level" , "radar" , "mom", "civic", "sandy"," political","dad"];

const newarr = function(arrstrng){

 return arrstrng.filter((item)=>{
    const rev = item.split("").reverse().join("");
    if (item == rev){
        return item
    }
})
}

console.log(newarr(arrstrng));



//Using IIFE

const array = ["level" , "radar" , "mom", "civic", "sandy"," political","dad"];

const palindromes = (() => {
    const isPalindrome = str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    return array.filter(word => isPalindrome(word));
})();

console.log(palindromes);
