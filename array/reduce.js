const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPythojn = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) =>
    atual + acumulador, 0);
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de JavaScript ${mediaSala(salaJava)}`)
console.log(`Média da sala de JavaScript ${mediasala(sala)}`);


const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum,atual) => acum + atual, 0) /notas.lenght

console.log(media);

//acum está pegando o total dos indices
//atualizando o total de indices



//reduce  sempre leva dois parametros o acumulador e o valor atual.

// !importante a ordem dos parametros se não for soma, é claro.

//O método reduce() está trabalhando com dois parâmetros.
// O primeiro é a função callback obrigatória para retornar o cálculo 
//e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.