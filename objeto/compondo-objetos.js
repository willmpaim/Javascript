const cliente = {
    nome: "andré",
    idade: 36,
    cpf: "125468121457",
    email:"andre2mail.com",
    fones: ["5187451248", "518475221"],
}


//adicionando outro objeto dentro da estrutura do primeiro objeto
cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNascim: "20/03/2000",
}

//altera dado de um ahcave do obejto, dentro do objeto.
cliente.dependentes.nome = "sara silva";

console.log(cliente);