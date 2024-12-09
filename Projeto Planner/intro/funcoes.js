// Funções Javascript possui formas diferentes para se criar funções: blocos de
// código com nome - ou não - que podem ser colocados em execução em algum mo-
// mento. A forma tradicional para se criar funções em Javascript envolve a palavra

// Function Veja os exemplos do Bloco de Código 1.6.1.

function hello() {
    console.log('Oi')
}

hello()

//cuidado, aqui redefinimos a função sem parâmetros
function hello(nome) {
    console.log('Hello, ' + nome)
}
hello('Pedro')

function soma(a, b) {
    return a + b;
}
const res = soma(2, 3)
console.log(res)

// Também é possível criar funções anônimas. Uma vez criadas, elas podem ser
// atribuídas a variáveis ou constantes, como no Bloco de Código 1.6.2.

const dobro1 = function (n) {
    return n * 2;
};

const result = dobro(4);
console.log(result);

//valor padrão para o parâmetro
const triplo1 = function (n = 5) {
    return 3 * n;
};

console.log(triplo());
console.log(triplo(10));

const hello = () => console.log("Hello");
hello();

const dobro = (valor) => valor * 2;
console.log(dobro(10));

const triplo = (valor) => {
    return valor * 3;
};

console.log(triplo(10));

//e agora?
const ehPar = (n) => {
    return n % 2 === 0;
};

console.log(ehPar(10));