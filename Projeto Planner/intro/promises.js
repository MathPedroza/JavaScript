/* Construindo promises Uma função cuja execução tem potencial para
demorar, idealmente executa de maneira assíncrona. Ela constrói um objeto do
tipo Promise e o devolve imediatamente, no estado Pending. A seguir, prossegue
com a sua computação. Ela pode terminar com sucesso ou com erro. Caso termine
com sucesso, a função especicada pelo cliente no bloco then entra em execução.
Caso contrário, aquela especicada no bloco catch executa. No Bloco de Código
3.3.1, a função assíncrona devolve uma promise em estado Pending. Quando
termina, ela chama a função resolve, o que quer dizer que a promise passou de
Pending para Fulllled.

Bloco de Código 3.3.1 */

function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        resolve(res); //estado full-filled
    });
}
calculoDemorado(10).then((resultado) => {
    console.log(resultado)
})

function calculoRapidinho(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
}
calculoRapidinho(10).then(resultado => {
    console.log(resultado)
})
//Executa primeiro, mesmo que a promise já esteja fullfilled
console.log('Esperando...')

/* Uma promise também pode ser devolvida já no estado Rejected. Para este
exemplo, pode ser interessante fazê-lo caso o valor entregue para a função as-
síncrona seja negativo, como no Bloco de Código 3.3.3. Note que o código cliente
pode especicar funções para ambas as possibilidades. Somente uma delas execu-
tará.

Bloco de Código 3.3.3
*/

function calculoRapidinho(numero) {
    return numero >= 0
        ? Promise.resolve((numero * (numero + 1)) / 2)
        : Promise.reject("Somente valores positivos, por favor");
}
calculoRapidinho(10)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => { // número negativos
        console.log(err);
    });
calculoRapidinho(-1)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    });
console.log("esperando...");