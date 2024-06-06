
import express from "express"
const router = express.Router()
import EquipeService from "../services/EquipeService.js";
import Auth from "../middleware/Auth.js"



// Rota para a pagina principal da equipe
router.get("/equipe", Auth, (req,res) =>{
    EquipeService.SelectAll().then((equipe)=> {
        res.render("equipe", {
            equipe : equipe
        })
    })
})

//Rota de inserção um novo membro a equipe
router.post("/equipe/novo", Auth , (req,res) =>{
    EquipeService.Create(
        req.body.nome,
        req.body.funcao,
        req.body.pagamento,
        req.body.encargo,
    )
   res.redirect("/equipe");
})

// Rota da pagina de Cadastro de um novo Membro
router.all("/equipe/cadastro", Auth , (req,res) =>{
    res.render("equipeCadastro")
})

//Rota para buscar um membro a ser editado
router.get("/equipe/editar/:id", Auth, (req,res) =>{
    const id = req.params.id
    EquipeService.SelectOne(id).then((equipe) =>{
        res.render("equipeEditar", {
            equipe : equipe
        })
    })
})

//Rota para fazer a alteração de um Membro
router.post("/equipe/update/:id", Auth, (req,res) => {
    EquipeService.Update(
        req.params.id,
        req.body.nome,
        req.body.funcao,
        req.body.pagamento,
        req.body.encargo,
    )
    res.redirect("/equipe")
})

//Rota de Exclusão de um membro
router.get("/equipe/deletar/:id", Auth , (req,res) =>{
    const id = req.params.id
    EquipeService.Delete(id)
    res.redirect("/equipe")
})

export default router