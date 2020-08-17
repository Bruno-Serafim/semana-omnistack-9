const express = require('express')
const mongoose = require('mongoose')  
const routes = require('./routes')

const app = express()

//Fazendo a conexão com o banco 
//porta do mongoDB 27017
//Consultar se algum proxy está bloqueado: portquiz.net:27017
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack.rx3gb.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(express.json())
app.use(routes)

//porta da aplicação
app.listen(3333)










//GET, POTS, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)