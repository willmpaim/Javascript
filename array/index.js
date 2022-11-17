//uitilze o map para retornar o resultado [10, 20, 30, 40]

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10
   }

const arraySomada = arrayNums.map(multiplicaPorDez => arrayNums.lenght)

console.log(arraySomada); 