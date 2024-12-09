/* O inferno de callbacks As funções que entregamos como argumento para
a função setTimeout e a função exibirConteudo usada no Bloco de Código 3.1.7
são exemplos de funções callback. A denição de uma função callback é respon-
sabilidade do desenvolvedor. Colocá-la em execução, por outro lado, é responsa-
bilidade do ambiente Javascript. Uma função callback entra em execução quando
um evento determinado acontece. Há um fenômeno conhecido como callback hell
ou inferno de callbacks que consiste no aninhamento de funções callback. Veja
um exemplo no Bloco de Código 3.2.1. Desejamos dobrar o valor lido do arquivo
arquivo.txt e armazenar o valor obtido em um arquivo chamado dobro.txt.

Bloco de Código 3.2.1 */

const fs = require("fs");// carrega uma bilbioteca adicional do Node
// carregar a biblioteca de arquivos do Node

const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());

            const dobro = +conteudo.toString() * 2; // +conteudo - tranforma a string em número

            const finalizar = function (erro) {
                if (erro) {
                    console.log('Deu erro tentando salvar o dobro')
                }
                else {
                    console.log("Salvou o dobro com sucesso");
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };

    fs.readFile(nomeArquivo, exibirConteudo);
};

abrirArquivo("arquivo.txt");