let URL = "https://dog.ceo/api/breeds/image/random";

const apiDog = async () => {
    // Faço a consulta na APi e retorno o Json na variavel resposta
    await fetch(URL).then((response) => {
        // Transformar o formato JSON em objeto
        return response.json();
    }).then((response) => {
        document.getElementById('mostraJSON').innerText = JSON.stringify(response)

        let image = `
            <img src="${response.message}" alt="">
        `

        document.getElementById('mostraIMG').innerHTML = image
    })
    

    // Pega o retorno em JSON e transformar ele em um objeto
    // let exemplo = resposta.json()
    // console.log(exemplo);

}

