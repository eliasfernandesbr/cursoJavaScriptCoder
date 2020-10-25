Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota. entre (9,10)){
        console.log("QUADRO DE HONRA")
    }else if (nota.entre(7, 9.00)){
        console.log("APROVADO")
    }else if(nota.entre(4, 6.99)){
        console.log("RECUPERAÇÃO")
    }else if(nota.entre(0, 3.99)){
        console.log("REPROVADO")
    }else{
        console.log("NOTA INVÁLIDA")
    }

}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2.3)
imprimirResultado(11)