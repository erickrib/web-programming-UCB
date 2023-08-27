
const nomesDiasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

for (let index = 0; index < nomesDiasDaSemana.length; index++) {
    const nomeDiaSemana = nomesDiasDaSemana[index];
    console.log(nomeDiaSemana);
}

const carro = {
    modelo: "Uno",
    ano: 2010,
    cor: "Vermelho",
}

for (const key in carro) {
    const element = carro[key];
    console.log(`${key}: ${element}`);
}

let i = 0

while (i < 7){
    console.log(nomesDiasDaSemana[i]);
    i++
}

do {
    console.log(nomesDiasDaSemana[i]);
    i++
} while (i < 7)
