var word = prompt("Word");

function Check(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
     s = reverseArray.join("");
    if(s == str)
    return true;
    else return false;

  }  console.log(Check(word))