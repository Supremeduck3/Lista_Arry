let jogos = ["Red dead Redemption 2","Doom: Eternal","God of War Ragnarok"];
let jogofavorito= jogos[0]
let ranking = ["1°","2°","3°"];
qntranking=ranking.length;
for (let i = 0; i < qntranking; i++ ){
    console.log (ranking[i]+ " " +jogos[i]);
}
console.log("Mas meu jogo favorito é "+ jogofavorito);
