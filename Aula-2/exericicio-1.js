// Desafio 01
// Faça um algoritmo que imprime uma matriz A e sua transposta.
//

function transportaMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const At = transportaMatrix(A);

console.log("Matriz A:");
console.table(A);

console.log("\nMatriz Transposta (At):");
console.table(At);

