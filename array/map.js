const notas = [10, 9 , 8 , 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota: ++nota); // o operador ++ vem antes 
//para poder executar o codigo na ordem correta, sendo assim adicionando antes no parametro nota.

console.log(notasAtualizadas);

//map metodo callback
//map retorna uma array atualizada com os novos valores.


const nomes = ["Ana Juliana", "Caio vinicius", "BIA silva"]; //retornar os nomes tudo em letras maiusculas;

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

//Enquanto o método forEach não tem um retorno, o método map() 
//pode retornar um array se a função informada tiver um return em seu escopo.