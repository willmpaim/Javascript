// declaracao da arrow function 
let sayHello = fullName => `Hello ${fullName}!` 

// chama a funcao 
console.log(sayHello('Steve Jobs'))
// output: Hello Steve Jobs!

//Eu atualizei a função para receber apenas um parâmetro, o nome completo, por isso eu posso deixar sem parênteses.
//No log do console, vai continuar apresentando a string ‘Hello Steve Jobs!‘, pois na chamada da função eu passei o nome completo em apenas um argumento.
//Mas você precisa tomar muito cuidado quando for usar um parâmetro default, nessa situação tem que usar os parênteses:
// declaracao da arrow function 
let sayHello = (fullName = 'anonymous') => `Hello ${fullName}!` 

// chama a funcao 
console.log(sayHello())
// output: Hello anonymous!

// declaracao da arrow function 
let getData = () => `Steve Jobs` 


//Até aqui, nós vimos uma Arrow Function sem chaves e sem a palavra-chave return.
//Mas existem situações em que eles são necessários, para exemplificar, vou criar uma função chamada getData:

// declaracao da arrow function 
let getData = () => `Steve Jobs` 

// chama a funcao 
console.log(getData())

// output: Steve Jobs

//Por termos apenas uma instrução no corpo da função, também não é necessário o uso de chaves.
//Mas e se ao invés de retornar uma string, quiséssemos retornar um objeto com as propriedades name e lastName?

// declaracao da arrow function 
let getData = () => { 
    let data = {} 
    data.name = 'Steve' 
    data.lastName = 'Jobs' 
  
    return data 
  } 
  
  // chama a funcao 
  console.log(getData())
  
  // output: {name: "Steve", lastName: "Jobs"}