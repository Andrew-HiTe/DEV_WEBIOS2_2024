//variáveis

var nome;

//func
function NomeAluno(){

};

function Contador(){
    //criar uma verificação se o numero digitado é par ou ímpar
    // se for ímpar então vamos apresentar na tela todos os números ímpares de 1 até 50
    // senão (se for par) vamos apresentar na tela todos os números pares de 1 até 50

    let impaPar = 56;
    let numero = 1;

    if (impaPar % 2 == 1){ // pega o numero divide por dois e se o resto da divisao foir 1 é impar, se for 0 é par
        console.log("Esse número é ímpar " + impaPar);
        for (numero; numero <= 50; numero++){
            if(numero % 2 === 1){
                console.log(numero);
            }
        }
    } else if (impaPar %2 == 0){
        console.log("Esse número é par " + impaPar);
        for (numero; numero <= 50; numero++){
            if(numero % 2 === 0){
                console.log(numero);
            }
        }
    }
}

console.log(Contador());

console.clear()

let BoasVindas = () => {
    return 'Sofrendo com JS/Com TCC'
}

console.log(BoasVindas());

// Os parenteses servem para trazer valores que estão fora da função para dentro dela assim conseguindo trabalhar com vários tipos de valores informado pelo usuário

let Soma  = (num1, num2) => { // pode passar o valor dentro
    return num1 + num2;
}

console.log(Soma(3,5)); // passa o valor fora

function Clique(){
    let cliques = 1;
    return cliques++
}

console.log(Clique());

let ChamaPopup = () =>{
    alert(`Parabéns você me chamou, descompensado!`)
}

let PasseMouse = () =>{
    alert(`Parabéns você me chamou, descompensado!`)
}