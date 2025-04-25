let numeros = ["1","2","3","5","6"];

let qntnumeros= numeros.length;

for(let i = 4; i < qntnumeros; i--){
    console.log(numeros[i])
    if(i <= 0){
        break
    }
}
