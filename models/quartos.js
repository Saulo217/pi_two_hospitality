import mongoose from 'mongoose';

const quarto = new mongoose.Schema({
    nome: String,
    tipo: String,
    camas: Number,
    categoria: String,
    statuss: String
});

export default quarto;
