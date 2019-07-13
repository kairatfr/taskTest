// var str = prompt("   ");
// function FindUniq(str){
//     var s1 = str.split("");
//     for(var i =0; i<s1.length; i++){
//         for(var j =1;j<s1.length; j++){
//             if(s1[i]==s1[j]){
// return s1[i];
//             }
//         }
//     }
// }
// console.log(FindUniq(str));
// var str = "asasdffgghh";
// var array = str.split("");
// function getUniqueElems(A)   // A - упорядоченный массив.
// {   
//     var n = A.length, B = [];
//     for (var i = 1, j = 0, t; i < n+1; i++)
//      { if (A[i-1] === A[ i ]) t = A[i-1];
//        if (A[i-1] !== t) B[j++] = A[i-1];
//      }
//                     // На выходе массив только с теми элементами входного 
//     return B;       //  упорядоченного массива, которые не имеют дубли.
// }

// console.log(getUniqueElems(array));

var str = prompt("word");
function firstNonRepeating(arr) {
 var n = arr.length;
    for (var  i = 0; i < n; i++) { 
        var  j; 
        for (j = 0; j < n; j++) 
            if (i != j && arr[i] == arr[j]) 
                break; 
        if (j == n) 
            return arr[i]; 
    } 
    return -1; 
}

console.log(firstNonRepeating(str));
