//Utilizando biblioteca "readline-sync" do node.js

let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n")
let sobrenome = rlSync.question("Qual seu sobrenome?\n")

const nomeCompleto = `${nome} ${sobrenome}`;
console.log(`Olá, seu nome completo é ${nomeCompleto}`)


