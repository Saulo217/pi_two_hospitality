import equipe from "../models/Equipe.js";
import mongoose from "mongoose";

const Equipe = mongoose.model("Equipe", equipe)

class EquipeService {

    // Selecionar todos os membros da EQUIPE
    SelectAll(){
        const equipes = Equipe.find()
        return equipes
    }

    //Criar novo membro da EQUIPE

    Create(nome, funcao, pagamento, encargo){
        const NovoMembro = new Equipe({
           
            nome : nome,
            funcao : funcao,
            pagamento : pagamento,
            encargo : encargo
        })
        NovoMembro.save()
    }

    //Selecionar um membro da equipe

    SelectOne(id){
        const equipe = Equipe.findOne({_id: id})
        return equipe 
    }
    
    
    //Atualizar um membro especifico

    Update(id, nome, funcao, pagamento, encargo){
        Equipe.findByIdAndUpdate(id, {
            nome : nome,
            funcao : funcao,
            pagamento : pagamento,
            encargo : encargo
        }).then(() =>{
            console.log(`Dados do Membro com a id ${id} alterados com sucesso`)
        }).catch(err =>{
            console.log(err)
        })
    }

    //Deletar um membro da equipe

    Delete(id) {
        Equipe.findByIdAndDelete(id).then(() =>{ 
            console.log(`Membro da equipe deletado com sucesso`)
        }).catch(err =>{
            console.log(err)
        })
    }


}

export default new EquipeService