function f() {
    let nome = 'João';

    function g() {
        console.log(nome);
    }

    g()
}

f()

/* Uma função, quando denida por outra, é chamada função interna e tem dois
escopos: o escopo interno e o escopo externo. Seu escopo interno é delimitado
pelas chaves que denem seu corpo. Seu escopo externo é delimitado pelas chaves
que denem o corpo da função que a dene. Seu escopo externo é também chamado
de escopo léxico. Uma função interna pode acessar as variáveis denidas em seu
escopo externo.*/

function ola() {
    let nome = 'João';
    return function () {
        console.log(nome);
    }
}

let olaResult = ola();
/*perceba que aqui a função ola já terminou.
 É de se esperar que a variável nome já não
 possa ser acessada.*/
olaResult();

//também vale com parâmetros
function saudacoesFactory(saudacao, nome) {
    return function () {
        console.log(saudacao + ', ' + nome);
    }
}

let olaJoao = saudacoesFactory('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();
tchauJoao();

function eAgora() {
    let cont = 1;
    function f1() {
        console.log(cont);
    }
    cont++;

    function f2() {
        console.log(cont);
    }
    //JSON contendo as duas funções
    return { f1, f2 }
}

let eAgoraResult = eAgora();

/* neste momento, a funcao eAgora já
executou por completo e a variável
cont já foi incrementada. Seu valor final
é mantido e, assim, ambas f1 e f2 exibirão 2.
*/
eAgoraResult.f1();
eAgoraResult.f2();