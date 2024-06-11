function index(title, buttons, placeholders, labels) {
  document.querySelector("title").innerText = title;
  for (i = 0; i < labels.length - 1; i++) {
    document.querySelectorAll("label")[i].innerText = labels[i];
  }
  for (i = 0; i < placeholders.length; i++) {
    document.querySelectorAll("input")[i]
      .setAttribute("placeholder", placeholders[i]);
  }
  for (i = 0; i < buttons.length; i++) {
    document.querySelectorAll("button")[i].innerText = buttons[i];
  }
}

function equipe(ths, labels, placeholders, buttons, title) {
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

  document.querySelector('#equipe').innerText = title;
}

function quartos(ths, labels, placeholders, buttons, title) {
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
  for (i = 0; i < buttons.length; i++) {
    document.querySelectorAll("option")[i].innerText = buttons[i];
  }

  document.querySelector('#quartos').innerText = title;
}

function relatorio() {
  for (i = 0; i < buttons.length; i++) {
    document.querySelectorAll("button.mes")[i].innerText = buttons[i];
  }
}
function navbar(navItem) {
  for (i = 0; i < navItem.length; i++) {
    document.querySelectorAll(".navItem")[i].innerText = navItem[i];
  }


}
const pt = {
  quartos: () => {
    quartos(
      [
        "ID", "Nome", "Tipo",
        "Camas", "Categorias", "Status",
        "Editar", "Remover"
      ],
      [
        "Nome: ", "Tipo: ", "Camas: ", "Categoria: ",
        "Status: "
      ],
      ["Criar", "Cancelar"],
      [
        "Selecione o Status",
        "Disponivel",
        "Ocupado",
        "Manutenção"
      ],
      'Quartos'
    )
    navbar(['Clientes', 'Equipe', 'Quartos', 'Relatórios', 'Linguagem', 'Logout'])
  },
  relatorio: () => {
    relatorio(
      [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro",

        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro",

        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
      ]
    )
    navbar(['Clientes', 'Equipe', 'Quartos', 'Relatórios', 'Linguagem', 'Logout'])
  },
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
      ],
      'Equipe'
    )
    navbar(['Clientes', 'Equipe', 'Quartos', 'Relatórios', 'Linguagem', 'Logout'])
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
    navbar(['Clientes', 'Equipe', 'Quartos', 'Relatórios', 'Linguagem', 'Logout'])
  }
}
const en = {
  quartos: () => {
    quartos(
      [
        "ID", "Name", "Type",
        "Beds", "Category", "Status",
        "Edit", "Remove"
      ],
      [
        "Name: ", "Type: ", "Beds: ", "Category: ",
        "Status: "
      ],
      [
        "Create", "Cancel"
      ],
      [
        "Select Status",
        "Available",
        "Unavailable",
        "Maintenance"
      ],
      'Rooms'
    )
    navbar(['Clients', 'Team', 'Rooms', 'Sheets', 'Language', 'Logout'])
  },
  relatorio: () => {
    relatorio(
      [
        [
          "January", "February", "March",
          "April", "May", "June",
          "July", "August", "September",
          "October", "November", "December",

          "January", "February", "March",
          "April", "May", "June",
          "July", "August", "September",
          "October", "November", "December",

          "January", "February", "March",
          "April", "May", "June",
          "July", "August", "September",
          "October", "November", "December"
        ]
      ]
    )
    navbar(['Clients', 'Team', 'Rooms', 'Sheets', 'Language', 'Logout'])
  },
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
      ],
      'Team'
    )
    navbar(['Clients', 'Team', 'Rooms', 'Sheets', 'Language', 'Logout'])
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
    navbar(['Clients', 'Team', 'Rooms', 'Sheets', 'Language', 'Logout'])
  }
}

async function changeLanguage(language = "pt", route = "") {
  const langs = {
    pt,
    en
  }

  langs[language][route]()
}