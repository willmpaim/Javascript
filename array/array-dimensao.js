const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

//['João', 'Juliana', 'Caio', 'Ana'] + [10, 7, 9, 6]
let listaNotasEAlunos = [alunos, mediasDosAlunos];


console.log(`${listaNotasEAlunos[0][0]}, sua média é: ${listaNotasEAlunos[1][0]}`);


//resposta - João sua média é 10

//Pega o indice [0] da array listaNotasEAlunos( no caso Alunos)
//em seguida pega o indice [0] da array dos alunos( no caso João)

//pega o indice [1] da array listaNotasEAlunos( no caso mediasDosAlunos)
//em seguida pega o indice[0] da array mediasDosAlunos( no caso 10)