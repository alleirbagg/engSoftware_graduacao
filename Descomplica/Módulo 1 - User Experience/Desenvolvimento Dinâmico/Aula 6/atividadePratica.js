const readline = require('readline-sync');

const bebida = readline.question("Escolha sua bebida, digite 1 para café, 2 para leite, 3 para chá: ");
let valor;
let bebidaEscolhida;

switch (bebida) {
    case '1':
        valor = 5.50;
        bebidaEscolhida = 'café';
        break;
    case '2':
        valor = 3.00;
        bebidaEscolhida = 'leite';
        break;
    case '3':
        valor = 4.50;
        bebidaEscolhida = 'chá';
        break;
    default:
        console.log("Opção inválida! Por favor, escolha entre café, leite ou chá.");
        break;
}

if (valor !== undefined) {
    console.log(`Você escolheu ${bebidaEscolhida} e o valor a ser pago é R$ ${valor.toFixed(2)}.`);
}
