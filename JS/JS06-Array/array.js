// let nomes = ["A" ]
// console.log(nomes[0]);

let nomes = new Array ("Andrew", "Emerson", "Nicolas", "Giovanna")
console.log(typeof conems);

let valores = ['Aluno1', 'Aluno2', 'Aluno3', 'Aluno4']
console.log(`Aqui é a lista inicial:\n${valores}`);
// pop - Remove ultimo elemento do array
let metodopop = valores.pop()
console.log(valores);
console.log(metodopop);
console.log("===========================");

// push
valores.push('Gigi')
console.log(valores);
console.log("===========================");

// shift - Remove o 1º
metodoshift = valores.shift()
console.log(valores);
console.log("===========================");

// unshift - Adiciona o 1º
valores.unshift('Nicolas')
console.log(valores);
console.log("===========================");

// toString
console.log("========toString==========");
let notas = [6, 8, 9, 5]
console.log(notas[0])
console.log(typeof notas[0]);;

let novasnotas = notas.toString()
console.log(notas[0])
console.log(typeof novasnotas[0]);

// Join - Transforma os números em uma string colocando separações
console.log("========Join==========");

let notasNovas = notas.join(" + ") 
console.log(notasNovas);
console.log(typeof notasNovas);

// Treino
console.log("========Exercicio==========");
let carros = ['Celta', 'Fusca', 'Prisma', 'HB20']
let car1 = carros.pop()
console.log(carros)

carros.unshift(car1)
console.log(carros);

let car2 = carros.join(" + ")
console.log(car2.toUpperCase());
