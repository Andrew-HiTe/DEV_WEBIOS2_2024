// Array

let frutas = ["Amora", "Banana", "Abacate", "Jabuticaba", "Abacaxi", "Manga", "Kiwi", "Uva"] // Coloque o nome de 8 frutas

frutas.forEach((valor, indice) =>{
    console.log(valor); // Conteúdo da posição
    console.log(indice); // Número da posição
})

// frutas.forEach(Percorrer)

//               conteúdo - indice
// function Percorrer(valor, indice){
//   console.log(valor); // Conteúdo da posição
//   console.log(indice); // Número da posição
// }

// for(i = 0; frutas.length > i; i++){
//   console.log(frutas[i]); // Conteúdo da posição
//   console.log(i); // Número da posição
// }

console.clear()

// Array de marcas de celular com 6 posições

// Math.currently / Math.max / Math.min / Math.sqrt
let numeros = [16, 22, 59, 94, 36, 71]

// Trazer um novo array atualizado com a raiz quadrada de cada número do array
let numerosDois = numeros.map(Math.sqrt)
let maiorNúmero = Math.min.apply(Math, numeros)

console.log(numeros);
console.log(numerosDois);
console.log(maiorNúmero);

console.clear()
console.log("----filter----");
// Criando um novo array que ira conter apenas os números maiores que 36
let filtraNumero = numeros.filter((valor) =>{
    return valor % 2 == 0
})

console.log(filtraNumero);

console.clear()

let tarefa = [
    {
        tarefa: "Dormir",
        isFeita: true
    },
    {
        tarefa: "Limpar",
        isFeita: false
    },
    {
        tarefa: "Torcer",
        isFeita: true
    }
]

// retorne apenas as tarefas que estão marcadas como true
// find
let retornaTrue = tarefa.find((item) => {
    return item.isFeita == true
})

console.log(retornaTrue);