// Importe o modelo cliente apenas uma vez no início do arquivo
import Cliente from '../models/cliente.js';

// Função para renderizar a página inicial
export const renderIndexPage = async (req, res) => {
    try {
        // Busque todos os clientes no banco de dados usando o modelo Cliente
        const clientes = await Cliente.find(); // Renomeie a variável para 'clientes'

        // Renderize a view 'index' e passe a lista de clientes
        res.render('index', { clientes }); // Renomeie a variável para 'clientes'
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).send('Erro ao buscar clientes');
    }
};

// Função para criar um novo cliente
export const createCliente = async (req, res) => {
    try {
        const { nome, cpf, email, telefone, rua, numero, bairro, cidade, estado, cep, data_checkin, data_checkout, preco_por_dia } = req.body;

        const endereco = {
            rua,
            numero,
            bairro,
            cidade,
            estado,
            cep
        };

        const historico_reservas = [{
            data_checkin,
            data_checkout,
            preco: 0, // Será calculado no middleware
            preco_por_dia
        }];

        const novoCliente = new Cliente({
            nome,
            cpf,
            email,
            telefone,
            endereco,
            historico_reservas
        });

        await novoCliente.save();

        res.redirect('/'); // Redirecionar para a página inicial ou outra página
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).send('Erro ao criar cliente');
    }
};
