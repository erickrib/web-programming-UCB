// Crie uma função que recebe uma String e retorna um Array
// com as palavras distintas da String recebida.

function palavrasDistintas(texto) {
    // Remover pontuações usando expressão regular
    const textoFormatado = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

    const palavras = textoFormatado.split(" ");
    const palavrasDistintasArray = [...new Set(palavras)];
  
    return palavrasDistintasArray;
  }
  
  const textoExemplo = "Esta é uma frase de teste, um exemplo para testar a função.";
  const palavrasExemplo = palavrasDistintas(textoExemplo);
  console.log(palavrasExemplo);