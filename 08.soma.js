const ler = require('readline-sync');
let soma=0;

for (let i = 0; i< 18; i++) {
     
    let num = ler.question( "digite 18 numeros :   "+(i+1) );
}
for (let i = 0; i < num.length; i++) {
    
    console.log(`valor ${i} :${num[i]}+`);
   soma += num[i];
}

while(num){
    if ( soma>500) {
        soma+soma-100;
     
    } else {
   
    }

}
