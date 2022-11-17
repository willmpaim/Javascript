const cliente = {
    nome: "andré",
    idade: 36,
    cpf: "125468121457",
    email:"andre2mail.com",
    fones: ["5187451248", "518475221"],
    dependentes: [{
        nome: "sara",
        parentesco: "filha",
        dataNascim: "20/03/2010",
    }]
}

cliente.dependentes.push({
    nome: "josé maria",
    parentesco: "filho",
    dataNasc: "04/01/2014",
})

const filhaMaisNova = cliente.dependentes.filter(dependestes => dependestes.dataNasc ==="04/01/2014");

console.log(filhaMaisNova[0].nome);