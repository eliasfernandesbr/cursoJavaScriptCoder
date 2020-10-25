function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 =  trabalho1 && trabalho2 //so vai comprar a tv se os 2 der certo
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete//operador unário

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    
}

console.log(compras(true, true))