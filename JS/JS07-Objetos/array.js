// objeto de alunos
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
console.log(aluno);

// Retora uma propriedade específica -> Coloca .(propriedade)
console.log(aluno.nome);

// Retorna apenas o campo isChora
console.log(aluno.isChora);



let IOS = [
    {
        nome: "Andrew",
        idade: 10,
        altura: 1.60,
        isCracha: true,
        isCamisa: false,
        isPaciencia: true,
        isChora: true,
        cor: "Roxo",
        nota: [7, 9, 6, 10, 9]
    },

    {
        nome: "Helo",
        idade: 12,
        altura: 1.40,
        isCracha: false,
        isCamisa: false,
        isPaciencia: true,
        isChora: true,
        cor: "Verde",
        nota: [4, 9, 9, 10, 10]
    }
]
console.log(IOS[1].nota[2], IOS[1].nota[4]);

for (let i = 0; i<IOS.length; i++) {
    let login = IOS[i]
    if(login.isCracha ==true){
        console.log("O aluno tem crachá");
        console.log(login.isCracha);
    }else{
        console.log("Aluno não tem crachá");
    }
    
}