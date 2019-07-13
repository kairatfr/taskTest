var Array = [];var j=0;
var i =Math.random()*10;
while(i >0){
    
    Array[j] = prompt("Massiv");
    i--;
    j++;
}
Array.sort((a,b)=>a-b);
var a =[];
a[0] = Array[1];
a[1] = Array[Array.length-2] ;
console.log(Array);
console.log(a);
