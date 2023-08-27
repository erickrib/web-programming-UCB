function nomeDaFuncao(parametroDaFuncao){
    let algumaCoisa = parametroDaFuncao

    return algumaCoisa
}

function saudacao(){
    console.log("Hello World");
}

saudacao()

function saucaoParametro(saudacao){
    console.log(saudacao);
}

saucaoParametro("Hello World");


const calculadora = {
    somar: (n1, n2) => {
        return n1 + n2;
    },
    multiplicar: (n1, n2) => {
        return n1 * n2;
    },
    dividir: (n1, n2) => {
        return n1 / n2;
    },
    subtrair: (n1, n2) => { 
        return n1 - n2;
    }
}


for (const key in calculadora) {
    const element = calculadora[key];
    console.log(element(2, 2));
}