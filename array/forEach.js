const notas = [10, 6.5 , 8 , 7.5];

let somaDasNotas = 0;

//callback
notas.forEach( nota => {
    somaDasNotas += nota
})

//metodo sem arrow function

notas.forEach(function(nota){
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length;

console.log(media);


//forEach também pode ser utilizado apara chamar uma função fora dele ( callback) 
