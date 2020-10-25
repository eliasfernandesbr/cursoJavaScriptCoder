const imprimirResultado = function (nota){
    switch (Math.floor(nota)){//nao é uma expressão verdadeiro ou falso;
        case 10:
        case 9:
            console.log("QUADRO DE HONRA")
            break  
            
            case 8:
            case 7:
                console.log("APROVADO")
                break
            
            case 6: case 5: case 4:
                console.log("RECUPERAÇÃO")
                break
            
            case 3: case 2: case 1: case 0:
                console.log("REPROVADO")
                break
                
            default:
                console.log("NOTA INVÁLIDA")    

    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)