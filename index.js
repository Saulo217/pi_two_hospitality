// index.js
import express from "express"; 
import mongoose from "mongoose";
import session from "express-session";
import { renderIndexPage } from "./controllers/indexController.js";
import Auth from "./middleware/Auth.js";
import equipeController from "./controllers/equipeController.js"
import quartosController from "./controllers/quartosController.js"

const app = express(); 

app.use(session({
    secret: "lojasecret",
    cookie: {maxAge: 3600000},
    saveUninitialized : false,
    resave: false
}));
import { createCliente, deleteCliente, editClientePage, updateClienteForm } from './controllers/indexController.js';

import UsersController from "./controllers/UsersController.js"

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ValeDoRefugio");

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use("/", equipeController)
app.use("/", quartosController)


app.use("/", UsersController)

app.get("/", Auth, renderIndexPage);

app.post('/createCliente', createCliente); // Rota para lidar com a criação de um novo cliente
app.get('/delete/:id', deleteCliente);// rota de exlusao
app.get('/edit/:id', editClientePage); // Rota para a página de edição
app.post('/update/:id', updateClienteForm); // Rota para processar o formulário de atualização
app.get('/relatorios', (req, res) => {res.render('relatorios');});
app.get('/relatorios', (req, res) => {res.render('relatorios');});


app.get("/", Auth, function(req,res){
    res.render("index")
})
app.get('/logout', (req, res) => {
    // Destruir a sessão
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao destruir a sessão:', err);
            res.status(500).send('Erro ao fazer logout');
        } else {
            // Redirecionar o usuário para a página inicial ou onde desejar após o logout
            res.redirect('/');
        }
    });
});
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});


