// Return all the palindromes in an array

//Using  Arrow function 


var arrstrng =["madam" , "mom", "7887", "sandy"," political","mam"];

let newarr = (arrstrng)=>{

 return arrstrng.filter((item)=>{
    let rev = item.split("").reverse().join("");
    if (item == rev){
        return item
    }
})
}

console.log(newarr(arrstrng));

  