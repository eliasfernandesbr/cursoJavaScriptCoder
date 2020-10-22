const nome = "Rebeca"
const concatenacao = "Olá" + nome + "!" //não pode quebrar a linha no meio de uma string
//no template string pode quebrar a linha (interpolar);

const template = `
Olá
${nome}!`

console.log(concatenacao, template)

//expressões...

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase(); 
console.log(`Ei... ${up('cuidado')}!`)