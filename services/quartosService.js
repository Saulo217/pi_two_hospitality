import quarto from "../models/quartos.js"
import mongoose from 'mongoose';

const Quarto = mongoose.model("Quartos", quarto)


class quartosService {
    Create(nome, tipo, camas, categoria, statuss) {
        const newQuarto = new Quarto({

            nome : nome,
            tipo : tipo,
            camas : camas,
            categoria : categoria,
            statuss : statuss
        })
        newQuarto.save()
    }

    Delete(id) {
        Quarto.findByIdAndDelete(id).then(() => {
            console.log(`Quarto com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }

    SelectOne(id) {
        return Quarto.findOne({_id: id})
    }
    
    Update(id, nome, tipo, camas, categoria, statuss) {
        Quarto.findByIdAndUpdate(id, {
            id : id,
            nome : nome,
            tipo : tipo,
            camas : camas,
            categoria : categoria,
            statuss : statuss
        }).then(() => {
            console.log(`Dados do quarto com id: ${id} alterados com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }

    SelectAll() { 
        const quartos = Quarto.find()
        return quartos
    }
}

export default new quartosService()
