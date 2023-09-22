/*
Fazendo o uso de função construtora e callback, crie um
programa para incluir notas, calcular a média e informar se um
aluno foi APROVADO ou REPROVADO.
Não é necessário utilizar o prompt, mas querendo se desafiar
nestes sentido mandem ver.
*/

const prompt = require('prompt-sync')();

function Aluno(nome, notas){
    this.notas = notas;
    this.nome = nome;

    this.calcularMedia = function(){
        const soma = notas.reduce((somaTotal, nota) => somaTotal + nota);
        const mediaDaSoma = soma/this.notas.length;
        return mediaDaSoma;
    }
    
}

function printResul(notas, nomet){
    const aprov = notas();
    const nome = nomet();
    if (aprov <= 10 && aprov >= 7 ){
        console.log(`Parabéns, ${nome} você foi aprovado com média: ${aprov}`);
    } else {
        console.log(`Que pena ${nome} foi reprovado com média: ${aprov}`);
    }
}

const pegarNome = prompt("Digite o nome do aluno a seguir: ");
const pegarNotas = prompt("Digite as notas do aluno a seguir: ");
const array = pegarNotas.split(',').map(parseFloat);

const aluno = new Aluno(pegarNome, array);

const media = aluno.calcularMedia();
const nome = aluno.nome;

printResul(() => media, () => nome);