class Aluno {
    constructor(nome, ano, altura, isCracha, isCamisa, cor) {
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    }

    // Método para exibir informações do aluno
    exibirInfo() {
        console.log(`Nome: ${this.nome}, ano: ${this.ano}, Altura: ${this.altura}, Crachá: ${this.isCracha}, Camisa: ${this.isCamisa}, Cor: ${this.cor}`);
    }
    retornaIdade(){
    
    }
}

let aluno1 = new Aluno("Andrew", 23, 1.63, true, true, "Amarelo");
let aluno2 = new Aluno("Jos", 23, 1.63, true, true, "Amarelo");

aluno1.exibirInfo(); // Nome: Andrew, ano: 23, Altura: 1.63, Crachá: true, Camisa: true, Cor: Amarelo
aluno2.exibirInfo(); // Nome: Jos, ano: 23, Altura: 1.63, Crachá: true, Camisa: true, Cor: Amarelo

