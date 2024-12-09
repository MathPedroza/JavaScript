async function hello(nome) {
    return "Oi, " + nome;
}

const boasVindas = hello("João");
console.log(boasVindas);
boasVindas.then(res => console.log(res));

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= 1;
    }
    return Promise.resolve(res);
}

function chamadaComThenCatch() {
    fatorial(5)
        .then(r => console.log(r))
        .catch(e => console.log("Deu erro:" + e))

    fatorial(-1)
        .then(r => console.log(r))
        .catch(e => console.log("Deu erro:" + e))
}
chamadaComThenCatch()

async function chamadaComAwait() {
    const f1 = await fatorial(5)
    console.log(f1)
    const f2 = await fatorial(-1);
    console.log(f2);
}

chamadaComAwait();