const express = require("express");
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.contador] = lembrete;
    },
    observacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.contador]
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes
    },

    ObservacaoAtualizada: (observacao) => {
        //const 
    }
}

app.get("/lembretes", (req, res) => {

})

app.post("/eventos", (req, res) => {
    funcoes[req.body.tipo](req.body.dados)

    res.send({ msg: "ok" });
})

app.listen(6000, () => console.log("Consulta. Porta 6000."))