var nomes = ["Maria","João", "Lucas", "Pedro"];
var novos = nomes.splice(1,2,"Luiz","Ronaldo"); // a partir da posição 1 quero tirar 2 nomes e adicionar Luiz e Ronaldo

console.log(nomes);

var pais = ["Brasil","Argentina","Colombia"];
pais.unshift("Uruguai")//adiciona o dado no início

console.log(pais)

/*Exercício: Criar um array com 5 nomes Guilherme, Manuel, Samuel, Davi e João.
Acrescentar o nome Monica
Retirar o ultimo elemento do array
Encontrar a posição do manuel
Trocar o manuel por emanuel*/

var nomesEx = ["Guilherme", "Manuel", "Samuel", "Davi", "João"];
nomesEx.unshift("Monica"); //Acrescenta Monica
console.log(nomesEx);

var menosUm = nomesEx.pop(); //Retira o último
console.log(nomesEx)

var posicaoManuel = nomesEx.indexOf("Manuel"); //Encontra a posição(índice)
console.log("A posição do nome Manuel é:", posicaoManuel);

var nomesCorrigidos = nomesEx.splice(2,1,"Emanuel"); //Altera nome
console.log(nomesEx)


//Um array com todos os meses do ano e dividir esse array em trimestres
var ano = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var trimestre1 = ano.splice(0,3);
var trimestre2 = ano.splice(0,3);
var trimestre3 = ano.splice(0,3);
var trimestre4 = ano.splice(0,3);

console.log(trimestre1);
console.log(trimestre2);
console.log(trimestre3);
console.log(trimestre4);



