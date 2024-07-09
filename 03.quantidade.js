
const ler =require('readline-sync');

let maior=0;
let menor=0;


for (let i = 0; i< 10 ; i++) {
     
    let num = ler.question( "digite 10 numeros :   "+(i+1) );
  



    if (num>5) {
        maior++;
    
    } else if (num<5) {
        menor++;

    }
    console.clear ();
}


 console.log(" a quantidade de numeros maiores que 5 e  : "+maior);
 console.log("a quantidade de numeros menores que 5 e    :"+ menor);
 