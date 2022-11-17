const cliente = {
    nome: "andré",
    idade: 36,
    cpf: "125468121457",
    email:"andre2mail.com",
    fones: ["5187451248", "518475221"],
    dependentes: [
     {
      nome: "sara",
      parentesco: "filha",
      dataNascim: "20/03/2010"},
     {
      nome: "josé maria",
      parentesco: "filho",
      dataNasc: "04/01/2014",
    }
  ],
  saldo:100,
  depositar:function(valores) 
  {
    this.saldo += valores;
  }
}

console.log(cliente.saldo)

cliente.depositar(30);

console.log(cliente.saldo);

//funcao que faz parte de um objeto chamamaos de metodo;