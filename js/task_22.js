var array1 = [1,2,5,5,5,5,5,5,5,6];
var array2 = [0,1,2,3,4];
var SumArray = [];
var larray1 = array1.length;  var larray2 = array2.length;
var zero = 0;

var l = (Math.max(array1.length, array2.length));
if(larray1!=l){
 for(var i = larray1+1; i<l+1;i++){
     array1[i-1] = 0;
 }
}
else {
    for(var i = larray2+1; i<l+1;i++){
        array2[i-1] = 0;
}
}


 console.log(array1);
 console.log(array2);

 for(var i = 0; i< l; i++){
     SumArray[i] = array1[i] + array2[i];
 }
 console.log(SumArray);

 //**************************************************** */,