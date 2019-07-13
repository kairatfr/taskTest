var a = 266;
var b = a.toString();



function reverseString(str) {
   
    var splitString = str.split(""); 
 
    var reverseArray = splitString.reverse();
    
    var joinArray = reverseArray.join("");
    
    return joinArray;
}
console.log(reverseString(b));

 
