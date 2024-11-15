let botao = document.querySelector('button')

let olhaNumero = true
if(olhaNumero === true){
    botao.style.color = "white"
    botao.style.backgroundColor = "green"
    botao.style.borderRadius = '10px'
    botao.innerHTML = "Cadastrar"
}else{
    botao.style.color = "white"
    botao.style.backgroundColor = "red"
    botao.style.borderRadius = '10px'
    botao.innerHTML = "Cadastrar"
}

let paragrafo = document.querySelector('#paragrafo')
paragrafo.style.backgroundImage = 'linear-gradient(90deg ,white 1%, green 40%  )'