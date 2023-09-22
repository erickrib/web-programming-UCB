// Parâmetros variáveis 

function somar(a = 10, b = 20){
    return a + b
}

console.log(somar());
console.log(somar(60));
console.log(somar(40,50));

function imposto(a, b = 0.03){
    let calcImposto = a - (a * b)

    return calcImposto
}

console.log(imposto(1000));