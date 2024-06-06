import mongoose from "mongoose";

// Definição do subdocumento Endereco
const enderecoSchema = new mongoose.Schema({
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    cep: String
});

// Definição do subdocumento Reserva
const reservaSchema = new mongoose.Schema({
    reserva_id: mongoose.Schema.Types.ObjectId,
    data_checkin: Date,
    data_checkout: Date,
    quarto_id: mongoose.Schema.Types.ObjectId,
    preco: Number // Novo campo para o preço
});

// Middleware para calcular o preço antes de salvar a reserva
reservaSchema.pre('save', function(next) {
    if (this.data_checkin && this.data_checkout) {
        const diasEstadia = Math.ceil((this.data_checkout - this.data_checkin) / (1000 * 60 * 60 * 24));
        const precoPorDia = 100; // Defina o preço por dia, você pode ajustar conforme necessário
        this.preco = diasEstadia * precoPorDia;
    }
    next();
});

// Definição do schema Cliente
const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: enderecoSchema,
    historico_reservas: [reservaSchema]
}, {
    timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

// Exportação do modelo Cliente
const cliente = mongoose.model('cliente', clienteSchema);

export default cliente;
