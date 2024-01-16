let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n")
let idade = rlSync.question("Qual a sua idade?\n")

console.log(`Olá, ${nome}`)
console.log(`Sua idade é: ${idade}`)

//Exemplo utilizando biblioteca "readline-sync" do node.js