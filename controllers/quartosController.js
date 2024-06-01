import express from "express"
const router = express.Router()
import quartosService from "../services/quartosService.js"
import Auth from "../middleware/Auth.js"

router.get("/quartos",  Auth, (req, res) => {
  quartosService.SelectAll().then((quartos) => { 
    res.render("quartos", {
      quartos: quartos,
    })
  })
})

router.all("/quarto/cadastro", Auth , (req,res) =>{
    res.render("quartoCadastro")
})

router.post("/quartos/new", Auth, (req, res) => {
    quartosService.Create(
      req.body.nome, 
      req.body.tipo, 
      req.body.camas,
      req.body.categoria,
      req.body.statuss
      )
    res.redirect("/quartos");
  })

  router.get("/quartos/delete/:id",  Auth, (req, res) => {
    const id = req.params.id
    quartosService.Delete(id)
    res.redirect("/quartos")
  })
  
  router.get("/quartos/edit/:id",  Auth, (req, res) => {
    const id = req.params.id;
    quartosService.SelectOne(id).then((quartos) => {
      console.log(quartos)
      res.render("quartosEdit", {
        quartos: quartos,
      })
    })
  })
  
  router.post("/quartos/update/:id",  Auth, (req, res) => {
    quartosService.Update(
      req.body.id, 
      req.body.nome, 
      req.body.tipo, 
      req.body.camas,
      req.body.categoria,
      req.body.statuss
    )
    res.redirect("/quartos")
  })
export default router