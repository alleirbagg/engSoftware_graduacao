/* Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. 
Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. 
Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.*/

import { question } from 'readline-sync';

let bebida = question("Escolha uma opção de bebida entre café, leite e chá: ");
let valor;

switch (bebida) {
    case "Café":
        valor = 5.00;

        break;
    case "Leite":
        valor = 4.00;

        break;
    case "Chá":
        valor = 5.00;

        break;
    default:
        console.log("Essa bebida não está disponível! Escolha uma opção entre café, leite e chá.")
}

if (valor !== undefined) {
    alert(`Você escolheu ${bebida} e o valor é R$ ${valor.toFixed(2)}`)
}
