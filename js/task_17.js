var i;
var j = 0;

var s = 0;
var arr = [3,8,9,7,6];var narr = arr.length;
// narr = prompt("vvedite kol massiva");
var n = prompt("how many times rotate");
// for(i =0; i< narr; i++){
//     arr[i] = Math.floor(i* Math.random()*10);
// }


console.log(arr+'\n');
while(n!=0){

for(i = 0; i< narr-1; i++){
s = arr[i];
arr[i] = arr[i+1];
arr[i+1] = s;
}
n--;
}
console.log(arr);
