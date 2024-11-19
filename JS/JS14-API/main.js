let URL = "https://dog.ceo/api/breeds/list/all"

const apiDog = async () => {
    // Faço a consulta na APi e retorno o Json na variavel resposta
    let resposta = await fetch(URL)
    console.log(resposta);

    // Pega o retorno em JSON e transformar ele em um objeto
    let exemplo = resposta.json()
    console.log(exemplo);

}
apiDog()
