// Array

let frutas = ["Amora", "Banana", "Abacate", "Jabuticaba", "Abacaxi", "Manga", "Kiwi", "Uva"] // Coloque o nome de 8 frutas

frutas.forEach((valor, indice) =>{
    console.log(valor); // Conteúdo da posição
    console.log(indice); // Número da posição
})

// METODO FUNCTION
frutas.forEach(Percorrer)
//                Conteudo    indice
function Percorrer(elemento, indice){
    console.log(elemento);
    console.log(indice);
}

frutas.forEach((elemento, item) => {
    console.log(elemento);
    console.log(item);
    
});