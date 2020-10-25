function tratarErroELancar(erro){
    throw new Error("...CODIGO COM ERRO") //caso haja erro no código, vai retornar essa inf p/ o usuario
    //throw 10
}


function imprimirNomeGritado(obj){

    try {
        console.log(obj.name.toUpperCase() + "!!!")//tente executar
    } catch (e){ //se nao funcionar, trate o erro;
        tratarErroELancar(e)

    }

}

const obj = {nome: "ROBERTO"}
imprimirNomeGritado(obj)