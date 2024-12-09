// 1.7 Closures Para entender o que é um closure, é importante estudar entender
// alguns conceitos. Primeiro, em Javascript, funcões são cidadãs de primeira
// classe. Informalmente, um cidadão de primeira classe em uma linguagem de
// programação é uma entidade que oferece suporte a operações como as seguintes.
// Ser passada como argumento para uma função.
// Ser devolvida por uma função.
// Ser atribuída a uma variável.

/*uma função pode ser atribuída
 a uma variável*/

let umaFuncao = function () {
    console.log("Fui armazenada em uma variável");

}

//e pode ser chamada assim
umaFuncao()
/*f recebe uma função como parâmetro e, por isso
   9 é uma função de alta ordem.
   10 Por devolver uma função, g também é de alta ordem.
   11 */

function f(funcao) {
    //chamando a função
    //note como a tipagem dinâmica tem seu preço
    funcao()

}

function g() {
    function outraFuncao() {
        console.log("Fui criada por g");

    }
    return outraFuncao;

}

//f pode ser chamada assim
f(function () {
    console.log('Estou sendo passada para f')

})

//e g pode ser chamada assim
const gResult = g()
gResult()

//e assim também
g()()

//outros testes
/* f chama g, que somente devolve uma função.
 34 Nada é exibido.*/
f(g)

/*f chama a função devolvida por g.
 37 "Fui criada por g" é exibido.*/
f(g())

/*f tenta chamar o que a função criada por g
 40 devolve. Ela não devolve coisa alguma. Por isso,
 41 um erro - somente em tempo de execução - acontece. */
f(g()())

//O que acontece?
f(1) // - Erro, pois não é uma função