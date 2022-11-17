const listaDeChamdas = ['João', 'ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaDeChamdas.splice(2,0,'Rodrigo');


console.log(`Lista de chamadas: ${listaDeChamdas}`);


// ele retira e coloca elementos atraves de 3 parametros , segue como no exemplo:

//primeiro parametro - escolhe por qual indice sera feirta a modificação sendo aqui o 2

//segundo parametro - escolhe quantos elementos serão removidos apartir do elemnto do primeiro parametro,

//terceiro parametro - adiciona um elemnto ao indice

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario);


/* o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), 
que remove dois elementos do array, a partir da posição 3. 
Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.