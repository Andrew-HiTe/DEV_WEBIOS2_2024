
let aluno = {
    nome: "Andrew",
    idade: 10,
    altura: 1.60,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: "Roxo"
}

    // transformar o obj em JSON
    console.log(aluno);

    console.log(JSON.stringify(aluno));

let Jsonito = '{"nome":"Andrew","idade":10,"altura":1.6,"isCracha":true,"isCamisa":false,"isPaciencia":true,"isChora":true,"cor":"Roxo"}'
console.log(JSON.parse(Jsonito));
