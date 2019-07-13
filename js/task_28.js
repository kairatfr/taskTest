var Sentense = prompt("sentense");
console.log(Sentense);
function CorrectSentence(Sentense){
         var Sentense1 = []; Sentense1 = Sentense.split("");
         Sentense1[0] = Sentense[0].toUpperCase();
         for(var i =0; i<Sentense1.length; i++){
             if(Sentense1[i] == " ")
             Sentense1[i+1] = Sentense1[i+1].toUpperCase();
         }
             
            
       
return Sentense1.join("");

};

console.log(CorrectSentence(Sentense));