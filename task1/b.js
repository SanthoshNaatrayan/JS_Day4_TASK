// Convert all the strings to title case in a string array

var arr =["converting string to titlecase", "learning arts ", "sleeeping till noon"]

// Both the Anonymous function and Arrow function were used in a single program below by using map function inside an user defined anonymous function. 

var titlecase = []
  var calling =function(str) {
    str =str.toLowerCase().split(' ')
    return str.map((word) =>{
     return (word.charAt(0).toUpperCase()+ word.slice(1) );
    }).join(' ');
}
for (i=0;i<arr.length;i++){
titlecase.push(calling(arr[i]));
}
console.log(titlecase)


// Using Anonymous Function

  var arr = ["converting string to titlecase"];
var titlecase =[]

var calling = function(str) {

    str = str.toLowerCase().split(" ");

    for(i=0;i<str.length ;i++){
    str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(" ");
}

for (i=0;i<arr.length;i++){
titlecase.push(calling(arr[i]))};

console.log(titlecase)








