const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //em java daria erro;

valores[4] = 10;//define um novo valor para posição 4 no array
console.log(valores)
console.log(valores.length) // lê a quantidade de valores no array

valores.push({id:3}, false, null, "teste") //adiciona valores no array
console.log(valores)

console.log(valores.pop())//retorna apenas o último valor do array
delete valores [0]//deleta o valor desta posição
console.log(valores)

console.log(typeof valores) //array em javascript é um objeto;

