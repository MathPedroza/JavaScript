/* Modelo Single Threaded Ambientes de execução Javascript são Single

Threaded. Isso quer dizer que há um único uxo de execução. Não há execu-
ção de código em paralelo. Como mostra o código a seguir, as instruções
são executadas uma após a outra, na ordem em que foram denidas. Não há a
possibidade de uma instrução i executar antes de outra instrução j(∀i > j). */

console.log('Eu primeiro')
console.log("Agora eu")
console.log("Sempre vou ser a última...:(")

// Este pode ser um funcionamento desejável, como mostra a seguir

const a = 2 + 7
const b = 5
//só faz sentido se os valores a e b já estiverem disponíveis
console.log(a + b)

/* Entretanto, pode ser o caso de uma determinada instrução não depender de
uma outra, anterior a ela, para poder executar corretamente. Isso pode ser um
problema pois a instrução que a antecede pode ser demorada.*/

/* A instrução que vem depois de sua chamada não depende do resultado
que ela produz.

Nota. Não se preocupe com o eventual warning sobre memory leak. A função
demorada emprega uma técnica conhecida como espera ocupada apenas para
simular um procedimento computacional demorado. 

Esse modelo de execução é conhecido como síncrono ou bloqueante. Am-
bientes Javascript (como um navegador ou o NodeJS) são responsáveis por ele.

Podemos empregar diferentes técnicas para obter um outro tipo de execução co-
nhecido como assíncrono ou não bloqueante. Uma forma bastante simples - e antiga, 
embora suciente para ilustrar didaticamente o conceito - consiste no uso
da função setTimeout. Ela recebe dois parâmetros: uma função e um valor em
milissegundos. A execução da função somente ocorre uma vez que pelo menos a
quantidade de milissegundos especicada se esgote. Enquanto isso, as instruções
que vem depois da chamada à função continuam executando normalmente, sem
car esperando. Elas não cam bloqueadas.*/

function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while 
    while (new Date().getTime() <= atualMais2Segundos);  // ponto e vírgula faz o while repetir
    const d = 8 + 4
    return d
}
const c = 2 + 3
const d = 5 + 9
const e = demorada()
/*
o valor de e não depende do valor devolvido
pela função demorada.
*/
const res = 2 + c + d
console.log(res)


function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const f = 8 + 4
    return f
}

const a1 = 2 + 3
const b1 = 5 + 9
//função será executada depois de, pelo menos, 500 milissegundos

setTimeout(function () {
    const f = demorada()
    console.log(d)
}, 500)

//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const g = a1 + b1
console.log(e)

/* Embora o Código acima ilustre o processamento não bloqueante, é
importante observar uma característica importante. A função que foi entregue
como parâmetro à função setTimeout foi, na verdade, enleirada. Ela somente
vai executar depois de o bloco principal ter sido completamente executado. Veja

o exemplo acima, note que especicamos 0 no segundo argumento. Tecnicamente, ela 
poderia executar imediatamente. Porém, isso não acontecerá, devido ao enleiramento. */

setTimeout(function () {
    console.log('dentro da timeout')
}, 0);

const a2 = new Date().getTime() + 1000
//não esqueça do ;, única instrução no corpo do while
while (new Date().getTime() <= a2);
console.log('fora da timeout')

/* Veja também o exemplo do Bloco abaixo. Ele ilustra como o enleiramento somente 
acontece depois de o tempo especicado no segundo parâmetro da função setTimeout se esgotar. */

function demorada(tempo) {
    console.log(`demorada ${tempo}`);

    const atualMaisTempo = new Date().getTime() + tempo;
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4;
    return d;
}

setTimeout(function () { demorada(2000) }, 2000);
setTimeout(function () { demorada(1000) }, 1000);

console.log("chegou ao fim do script principal");

/* Entretanto, é importante observar que há, de fato, instruções
que executam em threads diferentes. Essas são gerenciadas pelo próprio ambiente
de execução Javascript (NodeJs, navegador etc). Dizemos que o modelo é Single
Threaded pois o desenvolvedor tem acesso somente a uma thread. Ele não escreve
código para criar e gerenciar outras threads explicitamente. Isso ca a cargo do
ambiente. No exemplo do Bloco de Código 3.1.7 usamos um módulo para acesso
ao sistema de arquivos. Fazemos a leitura do conteúdo de um arquivo. Quando
ela termina, o conteúdo é exibido. Todo o código que escrevemos executa em uma
única thread. Entretanto, a leitura do arquivo, realizada pela função readFile
pode executar em uma thread separada.

Bloco de Código 3.1.7 */

const fs = require("fs"); // carrega uma bilbioteca adicional do Node
// carregar a biblioteca de arquivos do Node

const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) { //parâmetros
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString()); // converte em String
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
//crie um arquivo chamado arquivo.txt com o conteúdo

//``2''(sem as aspas)

//no mesmo diretório em que se encontra seu script
abrirArquivo("arquivo.txt");