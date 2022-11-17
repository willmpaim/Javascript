const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let i = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][i] + ", sua media é " + listaDeNotasEAlunos[1][i]
    } else {
        return "Aluno não esta cadastraado"
    }
}

console.log(exibeNomeNota("Ana"));


//includes retorna um booleano ( true ou false)
//indexof retorna retorna um elemento dentro do indice