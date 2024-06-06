import mongoose from "mongoose";

const equipe = new mongoose.Schema({
    nome : String,
    funcao : String,
    pagamento : Date,
    encargo : String,
})

export default equipe