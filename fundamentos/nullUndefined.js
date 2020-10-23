let valor //não inicializada
console.log(valor)
//console.log(valor2)//nem sequer foi declarado, retornando erro;

valor = null //não esta apontando para nenhum endereço de memória;
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
