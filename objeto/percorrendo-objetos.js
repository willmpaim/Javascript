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

let relatorio = '';

for (let info in cliente) {
  if(typeof cliente[info] ==="object" || typeof cliente[info] ==="function") {
    continue;
  }else{
    relatorio += `
     - ${info} ${cliente[info]} 
     `
  }   
}

console.log(relatorio);

//template string aceita quebras de linha para melhor visualização de conteudos//
//info entra como chave
// metodo "for in"