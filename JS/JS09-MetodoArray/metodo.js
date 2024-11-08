
// Array
let frutas = [ 'Maca', 'Morango', 'Abacaxi', 'Melancia', 'Limão', 'Laranja', 'Goiaba', 'Pera']

// METODO FOR
console.log("-------------------------------");
for(i = 0; i < frutas.length; i++){
    console.log(i);
    console.log(frutas[i]);
}

// METODO FUNCTION
frutas.forEach(Percorrer)
//                Conteudo    indice
function Percorrer(elemento, indice){
    console.log(elemento);
    console.log(indice);
}

frutas.forEach((elemento, item) => {
    console.log(elemento);
    console.log(indice);
    
});