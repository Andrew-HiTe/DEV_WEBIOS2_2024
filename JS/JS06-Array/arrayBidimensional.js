let notas = [
    [2, 6, 9, 10],
    [8, 7, 6, 4,]
]

console.log(delete notas[1][2])
console.log(notas);

console.log(notas[1][2] = 321321)
console.log(notas)

console.log("===============Exercício===============");

// Crie um array com 5 frutas
// Remova o ultimo elemento do seu array
// Agora adicione a fruta "Banana" no ultimo elemento do array
// Remova o segundo elemento do array [1]
// Passe seu array para string com o método join utilizando o " - "
// Apresente em tela o LOG

let frutas = ["Amora","Morango","Laranja","Kiwi","Mexerica"]

let retirarFruta = frutas.pop()
console.log(`${retirarFruta}`); 
frutas.push("Banana")
console.log(frutas);
delete frutas[1]
console.log(frutas);
frutasString = frutas.join(" - ")
console.log(frutasString);
