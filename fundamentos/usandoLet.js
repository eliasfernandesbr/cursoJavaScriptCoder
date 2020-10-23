var numero = 1
{
   let numero = 2 //let é uma variavel de escopo, tendo como preferência o escopo menor
   console.log("Dentro =", numero)  //imprime o valor2
}

console.log("Fora =", numero) //vai imprimir o valor 1