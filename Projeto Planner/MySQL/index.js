require('dotenv').config()
const express = require('express')
//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const app = express()
app.use(express.json())

const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env

    const pool = mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD,
        port: DB_PORT,
        waitForConnections: true,
        connectionLimit: 10, 
        queueLimit: 0
    })

app.get('/medicos', (req, res) => {
    pool.query('SELECT * FROM tb_medico', (err, results, fields) => {
        //results tem as linhas
        //fields tem meta dados sobre os resultados, caso estejam disponível
        res.send(results)
    })
})

app.post('/medicos', (req, res) => {
    const crm = req.body.crm
    const nome = req.body.nome
    const sql = "insert into tb_medico (crm, nome) values (?, ?)"

    pool.query(sql,
        [crm, nome],
        (err, results, fields) => {
            console.log(results)
            console.log(fields)
            res.status(201).send('ok')
        })
})

app.get('/pacientes', (req, res) => {
    pool.query('SELECT * FROM tb_pacientes', (err, results, fields) => {
        res.send(results)
    })
})

app.get('/consultas', (req, res) => {
    pool.query("select m.nome as nome_medico, c.data_hora, p.nome as nome_paciente from tb_medico mysql, join tb_consulta " + 
        "c on m.crm = c.crm join tb_paciente p on p.cpf c.cpf")
    res.json(results)
})

/*
function obterConexao() {
    const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD,
        port: DB_PORT,
    })
    return connection
}*/


const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))