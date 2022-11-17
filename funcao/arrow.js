// declaracao da funcao 
function sayHelloWorld() { 
    return 'Hello World!' 
  } 
  
  // declaracao da funcao como expressao 
  const sayHelloWorld2 = function() { 
    return 'Hello World!' 
  } 

  // declaracao da arrow function 
const sayHelloWorld3 = () => 'Hello World!' 
  
  // chama a funcao 
  console.log(sayHelloWorld()) 
  console.log(sayHelloWorld2())
  console.log(sayHelloWorld3())
  
  // output: 
  // Hello World!
  // Hello World!
  // Hello World!

//Repare que é uma expressão, porque a função está sendo atribuída à variável sayHelloWorld2.

//Nesse contexto, a função não tem um nome definido entre a palavra-chave function e a lista de parâmetros, por isso ela é chamada de função  anônima.

//Para executar essa função, basta usar o nome da variável sayHelloWorld2, que vai logar a mesma string no console.

//Quando falamos de Arrow Functions, elas são sempre expressões, e portanto, são sempre funções anônimas.

