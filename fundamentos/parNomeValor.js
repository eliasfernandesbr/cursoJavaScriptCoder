//par nome/valor
const saudacao = "Opa" //contexto léxico 1 - local onde a variavel foi fisicamente definida no codigo

    function exec(){
        const saudacao = "Fala" //contexto léxico 2 - o local onde foi definido, define o contexto
        return saudacao
    }


// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Dante",
    idade: 2,
    peso: 7,
    endereco: {
        logradouro: "Rua Lothario Boutin",
        numero: 220,
        cidade: "Curitiba"
    }
}

console.log(saudacao)
console.log(exec())
console.log(".................................")

console.log(cliente)