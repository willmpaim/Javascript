const nomes  = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline',
 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

 console.log("tamanho da array:", nomes.length);

 const sala1 = nomes.slice(0,nomes.length/2);

 const sala2 = nomes.slice(nomes.length/2);

 console.log(`alunos da sala 1: ${sala1}`);
 console.log(`alunos da sala 2: ${sala2}`);


 //divie (separa) os elementos de uma array //