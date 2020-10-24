console.log("01)", "1" ==1)// compara a igualdade entre os 2
console.log("02)", "1" ===1)// 1 é estritamente igual a 1? não  o primeiro é string e o outro é nunmber
console.log("03)", "3" !=3)//3 é diferente de 3? não leva em consideração o tipo de variável
console.log("04)", "3" !==3)//"3" é estritamente diferente de 3?

console.log("05)", 3<2)
console.log("06)", 3>2)
console.log("07)", 3<=2)
console.log("08)", 3>=2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log("09)", d1 ===d2)//compara apenas a referência de memória
console.log("10)", d1 ==d2)//compara apenas a referência de memória
console.log("11)", d1.getTime() === d2.getTime())// compara apenas o number
console.log("12)", undefined == null)
console.log("12)", undefined === null)


//o ideal é usar sempre o operador relacional estritamente igual;


