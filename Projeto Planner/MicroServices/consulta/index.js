const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.contador] = lembrete;
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"];
        const indice = observacoes.findIndex(o => o.id === observacao.id);
        observacoes[indice] = observacao;
    }
}

app.get("/lembretes", (req, res) => {
    res.send(baseConsulta)
})

app.post("/eventos", (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados)
    } catch (err) {
        console.log("Ignorando: " + req.body.tipo)
    }
    res.send({ msg: "ok" })
})

app.listen(6001, async () => {
    console.log("Consultas. Porta 6001.")
    const resp = await axios.get('http://localhost:10000/eventos')
    resp.data.forEach((valor, indice, colecao) => {
        try {
            funcoes[valor.tipo](valor.dados);
        } catch (err) {
            console.log("Ignorando ao subir: " + valor.tipo)
        }
    })
})