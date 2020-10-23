console.log(Math.ceil(6.1)) //arredonda para cima, ou seja, 7
console.log("..................................")
const obj1 = {}
obj1.nome = "Bola"
obj1["nome"] = "Bola2" //jeito menos utilizavel de acessar um atributo
console.log(obj1.nome)

console.log("............................")

function Obj(nome){ //recebera o atribudo dentro e pareteses, atribuir visibilidade para instanciar um objeto
    this.nome = nome //torna publico
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)