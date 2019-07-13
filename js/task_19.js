// function solution( N){
//      var N, binary = ''; 
//      countMax = 0;
//      var count = 1;
//      var a =[];
//      while ( N > 0 ) {
//           binary = ( N % 2 ) + binary;
//            N = Math.floor( N / 2 ); } 
//            var i =0;
//   for(i = 0; i<binary.length; i++){
//       if(binary[i] == 1){
//           if(countMax<count){
//               countMax = count;
//           }
//           else
//          count = 0; 
//       }

//   }

//     console.log(binary);
//     return Math.max(a);
//          }
         
//          console.log(solution(32) );
// // ************************************************
// function solution(N) {

//     var bin = Number(N).toString(2),
    
//     finalMax = 0,
    
//     currentMax;
    
//     for (var i = 0; i < bin.length; i++) {
    
//     currentMax = 0;
    
//     while (bin[i] === "0") {
    
//     ++currentMax && ++i;
    
//     }
    
//     finalMax = Math.max(finalMax, currentMax);
    
//     }
    
//     return finalMax;
//      console.log(bin);
//     }
    
//     console.log(solution(32)); 
   
    
// var a = 1041;
// console.log(a.toString(2));

var a = [1,2,3];
var n = array(a).toString;
console.log(n);