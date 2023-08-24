// Desafio 02

// Faça um algoritmo de multiplicação de matrizes: A x B = C;
// É primordial que o número de colunas da primeira matriz seja igual ao número
// de linhas da segunda matriz. Se for diferente, o algoritmo deve informar “Não é
// possível calcular”;

let matriz1 = [[1, 3],
               [2, 5]];
let matriz2 = [[2, 2],
               [0, 1]];

function multiplicarMatrizes(matriz1, matriz2) {
    if (matriz1[0].length !== matriz2.length) {
        console.log("Não é possível calcular");
        return;
    }

    const matrizMultiplicada = [];

    // Solução com map

    // const matrizMultiplicada = matriz1.map(row1 =>
    //     matriz2[0].map((_, j) =>
    //         row1.map((elem, k) => elem * matriz2[k][j]).reduce((acc, curr) => acc + curr, 0)
    //     )
    // );
    

    for (let i = 0; i < matriz1.length; i++) {
        let linha = [];
        
        for (let j = 0; j < matriz2[0].length; j++) {
            let elementos = [];
            
            for (let k = 0; k < matriz1[i].length; k++) {
                elementos.push(`${matriz1[i][k]} x ${matriz2[k][j]}`);
            }
            
            linha.push(elementos.join(" + "));
        }
        
        matrizMultiplicada.push(linha);
    }

    return matrizMultiplicada;
}

console.table(multiplicarMatrizes(matriz1, matriz2));
