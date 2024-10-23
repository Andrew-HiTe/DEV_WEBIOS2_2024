// let altura = 1.63
// let peso = 63
// let IMC = peso / (altura * altura)
// console.log(`O IMC é:${IMC.toFixed(2)} `);
// if (IMC < 18.5){
//     console.log("Abaixo do peso")
// }
// else if (IMC < 25) {
//     console.log("Peso normal");
// }
// else {
//     console.log("Peso acima");
// }
let valor; 

valor = 2

switch (valor) {
    case 1:
        console.log("Você foi avaliado como Ótimo");
        break;
    case 2:
        console.log("Você foi avaliado como Bom");
        break;
    case 3:
        console.log("Você foi avaliado como regular");
        break;
    case 4:
        console.log("Você foi avaliado como ruim");
        break;
    case 5:
        console.log("Você foi avaliado como péssimo");
        break;
    default:
        console.log("Você não foi avaliado")
        break;
}