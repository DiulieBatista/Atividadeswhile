
const ler =require('readline-sync');

let caro =0;
let barato =0;
let soma=0;

for (let i = 0; i< 15 ; i++) {
     
    let num = ler.question( "digite 15 numeros :   "+(i+1) );
  

    for (let i = 0; i < num.length; i++) {
    
        console.log(`valor ${i} :${num[i]}+`);
       soma += num[i];
   }

    if ( caro=num[i]) {
        caro++;
    
    } else if (barato=num[i]) {
        barato ++;

    }
    console.clear ();
}


 console.log(" a soma  dos produtos mais caros e  : "+ caro );
 console.log("a soma dos produtos mais baratos e     :"+ barato);
 