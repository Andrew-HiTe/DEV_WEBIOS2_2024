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
        let dataCompleta = new Date()
        let pegaAnoAtual = dataCompleta.getFullYear()
        return pegaAnoAtual - this.ano
    
    }
}
// Instancias
let aluno1 = new Aluno("Andrew", 2001, 1.63, true, true, "Amarelo");
let aluno2 = new Aluno("Joss", 1996, 1.73, false, true, "Verde");
    
aluno1.exibirInfo(); // Nome: Andrew, ano: 23, Altura: 1.63, Crachá: true, Camisa: true, Cor: Amarelo
aluno2.exibirInfo(); // Nome: Jos, ano: 23, Altura: 1.63, Crachá: true, Camisa: true, Cor: Amarelo

console.log(aluno1);
console.log(`A idade do Andrew é ${aluno1.retornaIdade()}`);
