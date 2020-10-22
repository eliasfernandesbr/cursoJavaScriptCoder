for (let numero = 0; numero < 40; numero++){
    console.log("Número dentro do escopo = ", numero)
}

console.log("Numero fora do escopo= ", numero) // como a variavel no escopo está declaraca como let
//não é possível acessa-la fora deste, retornando (IS NO T DEFINED)