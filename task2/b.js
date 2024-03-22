// Convert all the strings to title case in a string array using Arrow Function


var arr =["converting string to titlecase", "learning arts ", "sleeeping till noon"]
let titlecase = []
  let calling =(str)=> {
    str =str.toLowerCase().split(' ')
    return str.map((word) =>{
     return (word.charAt(0).toUpperCase()+ word.slice(1) );
    }).join(' ');
}
for (i=0;i<arr.length;i++){
titlecase.push(calling(arr[i]));
}
console.log(titlecase)