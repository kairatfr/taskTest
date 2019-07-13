/ you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var s =0;
    while(K != 0){
      s = A.pop();
       A.unshift(s);
           K--;    }
     
        return A;
}
    