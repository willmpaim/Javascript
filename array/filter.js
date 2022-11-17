const nomes = ["ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno, i) => notas[i] < 5);

console.log(`reprovados: ${reprovados}`);

// filter, pode receber um outro parametro, filter funciona pelo metodo bolleano.