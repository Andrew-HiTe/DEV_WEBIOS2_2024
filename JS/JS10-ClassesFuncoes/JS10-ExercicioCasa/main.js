// Crie uma classe chamada contaBancaria, no método constructor crie atributos nome, idade, salário, sexo, agência, conta, numeroConta.
// Crie os métodos contaPoupança, contaCorrente e contaEstudante.

// As regras paras as contas são a seguinte
// - Conta poupança com taxa de 1,5% ao mês.
// - Conta corrente com taxa de 3,6% ao mês.
// - Conta estudante com taxa de 1,2% ao mês.
// Instancie 3 objetos um para cada conta da classe contaBancaria e imprima as seguintes informações:
// Imprimir no console os dados do usuário, e o novo salário de cada conta com o desconto aplicado
class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta){
        this.nome = nome;
        this.idade = idade
        this.salario = salario
        this.sexo = sexo
        this.agencia = agencia
        this.conta = conta
        this.numeroConta = numeroConta
    }
    contaPoupança() {
        let taxaAdm = this.salario * 0.015
        this.salario -= taxaAdm
        console.log(`---CONTA POUPANÇA DE ${this.nome}---\nIdade: ${this.idade} anos. \nSexo: ${this.sexo}. \nO salário é de R$${this.salario}.\nA agencia é: ${this.agencia}, o número da conta é: ${this.numeroConta} e a conta é ${this.conta}\n`);
    }
    contaCorrente() {
        let taxaAdm = this.salario * 0.036
        this.salario -= taxaAdm
        console.log(`---CONTA CORRENTE DE ${this.nome}---\nIdade: ${this.idade} anos. \nSexo: ${this.sexo}. \nO salário é de R$${this.salario}.\nA agencia é: ${this.agencia}, o número da conta é: ${this.numeroConta} e a conta é ${this.conta}\n`);
    }
    contaEstudate() {
        let taxaAdm = this.salario * 0.012
        this.salario -= taxaAdm
        console.log(`---CONTA ESTUDANTE de  ${this.nome}---\nIdade: ${this.idade} anos. \nSexo: ${this.sexo}. \nO salário é de R$${this.salario}.\nA agencia é: ${this.agencia}, o número da conta é: ${this.numeroConta} e a conta é ${this.conta}\n`);
    }
}

let conta1 = new contaBancaria ("Andrew", 23, 10000, "Masculino", 2524,"Bradesco", 4723972093802)
let conta2 = new contaBancaria ("Pedro", 26, 12000, "Masculino", 1867,"Itaú", 6559481298310)
let conta3 = new contaBancaria ("Luana", 25, 16000, "Feminino", 6433, "C6 BANK", 7658890839205)

conta1.contaPoupança()
conta2.contaPoupança()
conta3.contaPoupança()

let conta4 = new contaBancaria("Mariana", 30, 9000, "Feminino", 1234, "Santander", 1234567890123);
let conta5 = new contaBancaria("Carlos", 28, 11000, "Masculino", 5678, "Banco do Brasil", 9876543210987);
let conta6 = new contaBancaria("Fernanda", 22, 13000, "Feminino", 9101, "Caixa", 1928374650912);

conta4.contaCorrente();
conta5.contaCorrente();
conta6.contaCorrente();

let conta7 = new contaBancaria("João", 21, 8000, "Masculino", 1122, "Nubank", 5647382910123);
let conta8 = new contaBancaria("Ana", 24, 9500, "Feminino", 3344, "Inter", 6758493029183);
let conta9 = new contaBancaria("Lucas", 27, 10500, "Masculino", 5566, "Original", 7869504130294);

conta7.contaEstudate();
conta8.contaEstudate();
conta9.contaEstudate();

