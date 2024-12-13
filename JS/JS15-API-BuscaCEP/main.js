let URL = 'https://viacep.com.br/ws/01001000/json/'

let cep = document.getElementById('cep')
let logradouro = document.getElementById('logradouro')
let complemento = document.getElementById('complemento')
let bairro = document.getElementById('bairro')
let estado = document.getElementById('estado')

async function BuscaCEP (){
    let resp = await fetch(URL).then((arquivoJSON) =>{
        return arquivoJSON.json()
    }).then((arquivoJSON) =>{
        cep.value = arquivoJSON.cep;
        logradouro.value = arquivoJSON.logradouro;
        complemento.value = arquivoJSON.complemento;
        bairro.value = arquivoJSON.bairro;
        estado.value = arquivoJSON.estado

    })
    
}

BuscaCEP()