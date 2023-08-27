// Na calculadora criada no exercício 01, adicione uma função
// chamada “fatorial”, que seja recursiva, que recebe 1 (um)
// parâmetro numérico e retorna o valor do seu fatorial.
// Exemplo:
// !3 = 3*2*1
// !5 = 5*4*3*2*1


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
    },
    fatorial: (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * calculadora.fatorial(n - 1);
        }
    }
};

const numero = 5;
const resultadoFatorial = calculadora.fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultadoFatorial}`);