// Fazendo a tabuada do 1 a 10 com DOM
let valor = document.getElementById('recebeValor')
let resultado = document.getElementById('resultado')


const Tabuada = () => {
    let numeroRecebido = valor.value
    if(numeroRecebido == ""){
        let mensagem = resultado.innerHTML = "Insira um valor válido"
        resultado.style.color = "red"
    }else{
    resultado.innerHTML = ""
    resultado.style.color = "black"
    for (i = 0; i <= 10; i++){
        resultadoTabuada = numeroRecebido * i

        console.log(numeroRecebido , " x " , i, ' = ' , (resultadoTabuada));
        resultado.innerHTML += `${numeroRecebido} x ${i} = ${resultadoTabuada} <br>`

    }}
}
const Limpar = () => {
    valor.value = ""
    resultado.innerHTML = ""
}

