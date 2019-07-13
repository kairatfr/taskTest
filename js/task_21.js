

// function unique(ar) {
//   var obj = {};

//   for (var i = 0; i < ar.length; i++) {
//     var str = ar[i];
//     obj[str] = true; // запомнить строку в виде свойства объекта
//   }

//   return Object.keys(obj); // или собрать ключи перебором для IE8-
// }

// var arr = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна","jane", "кришна", "8-()"
// ];

// console.log( unique(arr.sort()) );

//****************************************************************************


var names = ["Sam", "Joe", "sam", "Jim", "Jane"];
var newArray = names.map(function(item) {return item.toLowerCase()});
var filter = new Set(newArray);
var result = [];

for(item of filter) {
  item = item.replace(item[0], item[0].toUpperCase())
  result.push(item);
}

console.log(result);




















// *********************************
// var arr = [];
// var ar =["Sam", "Joe","Joe", "JIM", "Jim", "Jane"];

// for(var i = 0; i<ar.length; i++)
//     arr[i] = ar[i].toLowerCase();

// function UnicArray(arr){
//   var result = [];
//   for(var i=0; i<arr.length; i++){
//         if(!InArray(result, arr[i])){
//         result.push(arr[i]);}
//     }
// return result;
// }





// function InArray(arr,elem){

//   for(var i =0; i<arr.length; i++){
//     if(arr ===elem){
//       return true;
//     }
//   } return false;

//   }

// console.log(UnicArray(arr["Sam", "Joe","Joe", "JIM", "Jim", "Jane"]
// )); 