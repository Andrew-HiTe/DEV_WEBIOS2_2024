// let grupo = ['Nicolas', 'Andrew', 'Pasti', 'Caio']
// //decladaração da variável; Teste lógico; Incremento
// for (let contador = 0 ; contador < 4 ; contador++){
//     console.log(`contador: ${contador}`);
//     console.log(`Olá,${grupo[contador]}`);
// }

let NFibo = 0 
let A = 0
let B = 1
for (i = 0; i <= 10; i++){
    NFibo = A
    console.log(`O NFibo vira A. O numero então fica = ${A}`);
    A = B
    console.log(`O A vira B. A então fica = ${B}`);
    B = NFibo + B 
    console.log(`O B vira NFibo + B = ${NFibo} + ${B}`);
    console.log(`NFibo = ${NFibo}`)

}