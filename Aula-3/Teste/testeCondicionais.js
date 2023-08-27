
const hora = 12
let cumprimento = " "

if (hora < 12) {
    cumprimento = "Bom dia!"
} else if (hora < 18) {
    cumprimento = "Boa tarde!"
} else { 
    cumprimento = "Boa noite!"
}

console.log(cumprimento);

const diaDaSemana = 0
let nomeDiaSemana = ""

switch (diaDaSemana) {
    case 0: 
        nomeDiaSemana = "Domingo"
        console.log(nomeDiaSemana);
    case 1:
        nomeDiaSemana = "Segunda-feira"
        break
    case 2:
        nomeDiaSemana = "Terça-feira"
        break
    case 3:
        nomeDiaSemana = "Quarta-feira"
        break
    case 4:
        nomeDiaSemana = "Quinta-feira"
        break
    case 5:
        nomeDiaSemana = "Sexta-feira"
        break
    case 6:
        nomeDiaSemana = "Sábado"
        break
}

console.log(nomeDiaSemana);