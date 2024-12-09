// declarando constantes

const nome = "Matheus";
const idade = 27;

// aspas simples e aspas duplas tem o mesmo efeito
const sexo = "M";
const endereco = 'Rua X, 12'

//Declarando variáveis

let a = 2;
let b = "abc";

// var: seu escopo é a função em que foi declarada ou global

var c = 2 + 3;
var d = "abcd";

var linguagem = "Javascript";
console.log("Aprendendo " + linguagem); // printa no terminal

var linguagem = "Java";
console.log("Aprendendo, " + linguagem);

// Escopo não restrito a bloco

var idade2 = 18;

// Exibe undefinied. Ou seja, a variável já existe aqui, só não teve valor atribuído
// Ela é içada - do inglês hoist = para fora do bloco if

console.log(`Oi, ${nome}`);

if (idade >= 18) {
    var nome2 = "João";
    console.log(`Parabéns, ${nome}. Você pode dirigir`);
}

// ainda existe aqui

console.log(`Até mais, ${nome}.`);

const n1 = 2;
const n2 = '3';
//coerção implícita de n1, concatenação acontece
const n3 = n1 + n2;
console.log(n3);
//coeração explícita, soma acontece
const n4 = n1 + Number(n2)
console.log(n4)

/* A comparação leva em conta somente os valores envolvidos. Isso quer
dizer que, caso sejam de tipos diferentes, ocorrerão coerções implícitas, as
quais nem sempre têm o funcionamento mais intuitivo.
 === Este operador não realiza coerções. O resultado da comparação é
true caso os valores e seus respectivos tipos forem iguais. Caso contrário, o
resultado é false.*/

console.log(1 == 1)//true
console.log(1 == "1") //true
console.log(1 === 1) //true
console.log(1 === "1")//false
console.log(true == 1) //true
console.log(1 == [1])//true
console.log(null == null)//true
console.log(null == undefined)//true
console.log([] == false)//true
console.log([] == [])//false