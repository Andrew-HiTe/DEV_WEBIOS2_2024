let salario = document.getElementById("salario")
let resposta = document.getElementById("resposta")

const Calculo = () => {
    let salariovalor = parseFloat(salario.value)
    let salarionovo = (salariovalor * 1.17) + 215
    salarionovo = salarionovo.toFixed(2)
    resposta.innerHTML = 
    `O valor bruto do salário é: R$${salariovalor.toFixed(2)}  <br> <br> 
    Com o aumento de 17% e o reajuste anual de 215 reais, o novo salário é: <br><br> 
    R$ ${salarionovo}
    `
}