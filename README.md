**<h1>Javascript estudo sobre funções, objetos, arrays e classe</h1>**
<p> segue alguns exemplos : </p>

<h2> :memo: Funções</h2>
Estudo sobre funções anonimas e arrow functions:

```
Let sayHello = (fullName = 'anonymous') => `Hello ${fullName}!

let sayHello = fullName => `Hello ${fullName}!` 
```
<h2> :memo: Array</h2>
Utilização de algumas funções dentro de array e como percorrer as mesmas:

```
const nomes = ["ana", "Marcos", "Maria", "Mauro"];

const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno, i) => notas[i] < 5); 
```
<h2> :memo: Objeto</h2>

```
const cliente = {
    nome: "andré",
    idade: 36,
    cpf: "125468121457",
    email:"andre2mail.com",
    fones: ["5187451248", "518475221"],
}


//adicionando outro objeto dentro da estrutura do primeiro objeto
cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNascim: "20/03/2000",
}

//altera dado de um chave do obejto, dentro do objeto.
cliente.dependentes.nome = "sara silva";
```
<h2> :memo: Classe</h2>

```
class Cliente {
    constructor(nome,email,cpf,saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo)
    }

}

const andre = new Cliente("André", "andre@email.com", "124516244512",100);
```
<p> :bulb: Estes e os demais exemplos que constam neste repositiro podem ser conferidos atraves de qualquer versionador de codigo</p>

