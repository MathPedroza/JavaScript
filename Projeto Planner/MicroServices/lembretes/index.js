const express = require('express')
const app = express()
app.use(express.json())
const axios = require('axios')

const lembretes = {};
contador = 0;

app.get('/oi', (req, res) => {
    res.send("Tudo certo")
})

app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

app.post('/lembretes', async (req, res) => {
    contador++
    const { texto } = req.body
    lembretes[contador] = {
        contador, texto
    }
    await axios.post('http://localhost:10000/eventos', {
        tipo: "LembreteCriado",
        dados: {
            contador,
            texto,
        }
    })
    res.status(201).send(lembretes[contador])
})

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.send({ msg: "ok" });
});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000')
})