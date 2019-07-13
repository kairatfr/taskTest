var String  = "AAAAABABABBBA";
var line  = String.length;
var count = 0;
var countb = 0;
var A = 'A';
var B = 'B';

for(var i = 0; i< line; i++)
{
    if ( A== String[i] && String[i] == String[i+1])
        count++;
  

    else if  (B == String[i] && String[i] == String[i+1]){
        countb++;    }
}  
console.log(count+countb);


// function bubbleSort(arr) {
//     for (var i = 0, endI = arr.length - 1; i < endI; i++) {
//         for (var j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//             }
//         }
//     }
//     return arr;
// }
// console.log( bubbleSort(arr));