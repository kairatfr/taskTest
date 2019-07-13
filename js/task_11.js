var a = [];
var i;
for(i = 1; i<100; i++)
{
   a[i]= i;
   if (a[i]%5 == 0 && a[i]%3==0) { console.log('Fizzbaz');
        
    }
    else if (a[i]%3 ==0){console.log('Fizz')}
       else if(a[i]%5 ==0) {console.log('bazz')}


   // else { console.log(a[i]);}
}

  


