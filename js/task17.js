var i;
var j = 0;
var narr = 0;
var s = 0;
var arr = [];
narr = prompt("vvedite kol massiva");
var n = prompt("how many times rotate");
for(i =0; i< narr; i++){
    arr[i] = Math.floor(i* Math.random()*10);
}

console.log(arr+'\n');

for(i =0; i< narr, j< n; i++, j++){
    s = arr.shift();
    arr.push(s);
}

console.log(arr)