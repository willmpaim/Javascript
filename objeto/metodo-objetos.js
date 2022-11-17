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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")) 
    {
        console.log(`oferta de seguro de vida para ${obj.nome}`);
    }
}


console.log(Object.values(cliente));
oferecerSeguro(cliente);


//object.keys = pega chave
//object.values = pega os valores dos objetos
//object.entries = conjunto de arrays e chaves(chave,valor)

