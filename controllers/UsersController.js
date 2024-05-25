import express from "express"
import bcrypt from "bcrypt"
const router = express.Router()
import UserService from "../services/UserService.js"

// ROTA DE LOGIN
router.get("/login", (req, res) => {
    res.render("login", {
        loggedOut: true
    })
})

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
    req.session.user = undefined
    res.redirect("/")
})

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    //BUSCA O USUÁRIO NO BANCO
    UserService.SelectOne(email).then(user => {
        // SE O USUÁRIO EXISTIR
        if (user != undefined){
            // VALIDA SENHA
            const correct = bcrypt.compareSync(password, user.password)
            // SE A SENHA FOR VÁLIDA
            if(correct){
                // AUTORIZA LOGIN
                req.session.user = {
                    id : user._id,
                    email : user.email
                }
                // RESPOSTA ENVIADA APÓS O LOGIN
                // res.send(`Usuário logado: <br> ID: ${req.session.user['id']} <br> E-mail: ${req.session.user['email']}`)
                res.redirect("/")
            // SE A SENHA FOR INCORRETA
            } else {
                res.send(`Senha inválida!
                <br><a href="/login">Tentar novamente.</a>`)
            }
        // SE O USUÁRIO NÃO EXISTIR    
        } else {
            res.send(`Usuário não existe.
            <br><a href="/login">Tentar novamente.</a>`)
        }
    })
})

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        loggedOut: true
    })
    
})

// ROTA DE CRIAÇÃO DE USUÁRIO NO BANCO
router.post("/createUser", (req, res) => {
    // Coletando as informações do corpo da requisição
    const email = req.body.email
    const password = req.body.password
    // VERIFICAR SE O USUÁRIO JÁ ESTÁ CADASTRADO NO BANCO
    UserService.SelectOne(email).then(user => {
        // SE O USUÁRIO NÃO EXISTIR
        if (user == undefined) {
        // AQUI SERÁ FEITO O CADASTRO
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        UserService.Create(email, hash)
        res.redirect("/login")
        } else {
            res.send(`Usuário já cadastro!
            <br><a href="/cadastro">Tentar novamente.</a>`)
        }
    })
})

export default router