function index(title, buttons, placeholders, labels) {
    document.querySelector("title").innerText = title;
    for (i = 0; i < labels.length; i++) {
        document.querySelectorAll("label")[i].innerText = labels[i];
    }
    for (i = 0; i < placeholders.length; i++) {
        document.querySelectorAll("input")[i].setAttribute("placeholder", placeholders[i]);
    }
    for (i = 0; i < buttons.length; i++) {
        document.querySelectorAll("button")[i].innerText = buttons[i];
    }
}

function equipe(ths, labels, placeholders, buttons) {
    for (i = 0; i < ths.length; i++) {
        document.querySelectorAll("th")[i].innerText = ths[i];
    }
    for (i = 0; i < labels.length; i++) {
        document.querySelectorAll("label")[i].innerText = labels[i];
    }
    for (i = 0; i < placeholders.length; i++) {
        document.querySelectorAll("input")[i].setAttribute("placeholder", placeholders[i]);
    }
    for (i = 0; i < buttons.length; i++) {
        document.querySelectorAll("button")[i].innerText = buttons[i];
    }
}

const pt = {
    equipe: function () {
        equipe(
            [
                "ID", "Nome", "Função",
                "Dia de pagamento",
                "Encargo", "Editar",
                "Remover"
            ],
            [
                "Nome: ", "Função: ", "Pagamento: ",
                "Encargo: "
            ],
            [
                "Digite o Nome", "Digite a Função",
                "Digite o dia do Pagamento",
                "Digite o Encargo"
            ],
            [
                "Cadastrar Membro",
                "Cancelar"
            ]
        )
    },
    index: () => {
        index(
            "Hotel Vale Do Refúgio",
            ["Selecionar Quartos", "Cadastrar Cliente"],
            [
                "Nome Completo", "CPF", "Número de Telefone", "Endereço de E-Mail",
                "Detalhes do Endereço", "Histórico de Reservas", "Data de Check-in", "Data de Check-out", "Preço Diário (BRL)",
                "Quartos"
            ],
            [
                "Nome Completo ", "Digite o seu CPF", "Digite o seu número de Telefone",
                "Digite o seu Endereço de E-Mail", "Digite a sua Rua", "Digite o seu Número", "Digite o seu Bairro",
                "Digite a sua Cidade", "Digite o seu Estado", "Digite o seu CEP", "Digite o preço Diário"
            ],
        )
    },
}

const en = {
    equipe: () => {
        equipe(
            [
                "ID", "Name", "Role",
                "Payday",
                "Charge", "Edit",
                "To remove"
            ],
            [
                "Name: ", "Role: ", "Payment: ",
                "Charge: "
            ],
            [
                "Enter Name", "Enter Role",
                "Enter payment day",
                "Enter Charge"
            ],
            [
                "Register Member",
                "Cancel"
            ]
        )
    },
    index: () => {
        index(
            "Vale do Refúgio Hotel",
            ["Select Rooms", "Register Client"],
            [
                "Full Name", "CPF", "Phone Number", "Email Address", "Address Details",
                "Booking History", "Date Check-in", "Date Check-out",
                "Daily Price (USD)", "Rooms"
            ],
            [
            "Full Name", "Enter Your CPF", "Enter your Phone number",
            "Enter your Email Address", "Enter your Street",
            "Enter your Home number", "Enter your Neighborhood name",
            "Enter your City name", "Enter your State/Province name", "Enter your Postal Code",
            "Enter daily price"
            ],
        )
    }
}

async function changeLanguage(language = "pt", route = "") {
    const langs = {
        pt,
        en
    }

    langs[language][route]()
}