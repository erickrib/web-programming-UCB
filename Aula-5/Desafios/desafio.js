/* 

Com base no que aprendemos até aqui, criem um sisteminha
simples para calcular o valor de uma compra de
supermercado. Como clientes, temos o nosso carrinho de
compras e precisamos adicionar itens a ele. Temos que
cadastrar os itens (nome do item e preço), fazer o calculo do
preço (com ou sem desconto) e retornar o valor total da
compra.
Precisamos utilizar constructor (ou factory) function, além de
callback function para a resolução do nosso problema.

*/

function Item(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

function Carrinho() {
    this.items = [];

    this.cadastrarItens = function(itens) {
        itens.forEach((item) => {
            this.items.push(item);
        });
    }

    this.printarItens = function() {
        this.items.forEach((item) => {
            console.log(item.preco);
        });
    }

    this.fecharACompra = function(calcularDesconto){
        this.precoFinal = calcularDesconto(this.items, true)
        console.log(`Sua compra ficou com o preço de ${this.precoFinal}`);
    }

}

function calcularDesconto(items, temDesconto){
    let soma = 0; // Correção: Use let em vez de this para definir soma
    items.forEach((item) => {
        soma += item.preco;
    });

    if (temDesconto){
        return soma * 0.9;
    } else {
        return soma;
    }
}

const carrinho = new Carrinho();
const item1 = new Item("Leonardo", 89.8);
const item2 = new Item("Juliana", 23.4);
const item3 = new Item("Yasmin", 40.6);
carrinho.cadastrarItens([item1, item2, item3]);
carrinho.printarItens();
carrinho.fecharACompra(calcularDesconto);