//Utilizando biblioteca "readline-sync" do node.js

import { question } from 'readline-sync';
let nome = question("Qual o seu nome?\n")
let sobrenome = question("Qual seu sobrenome?\n")

const nomeCompleto = `${nome} ${sobrenome}`;
console.log(`Olá, seu nome completo é ${nomeCompleto}`)


