function cliente(nome, cpf, email, saldo) {
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function(valor) {
        this.saldo += valor
    }
}
        // "new"palavra reservada//
const andre = new cliente("André", "12345678", "andre@email.com",100);

console.log(andre);

