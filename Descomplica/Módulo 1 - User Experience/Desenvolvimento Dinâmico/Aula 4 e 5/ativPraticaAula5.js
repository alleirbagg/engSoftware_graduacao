/*
Você está trabalhando em um projeto de programação e precisa manipular um array que contém tanto strings quanto números. 
Para isso, você decide utilizar as funções ‘map’, ‘filter’ e ‘reduce’ em JavaScript.

O array dado possui uma combinação de strings e números, e sua tarefa é realizar algumas operações específicas nele. 
Primeiramente, utilizando a função ‘map’, você deve criar um novo array onde os números serão duplicados e as strings serão transformadas em letras maiúsculas. 
Caso existam elementos de outros tipos no array, eles devem ser mantidos sem alteração.

Em seguida, utilizando a função ‘filter’, você deve criar outro array contendo somente os números presentes no array original. 
Ou seja, todos os elementos que não são números devem ser excluídos.

Por fim, utilizando a função ‘reduce’, você deve somar todos os números do array original. O resultado dessa soma deve ser armazenado em uma variável.
*/

var dados = [1,2,3,"Um","Dois","Tres"]

var atividade = dados.map(element => {
    if (typeof element === 'number') {
      // Se o elemento for um número, duplica-o
      return element * 2;
    } else if (typeof element === 'string') {
      // Se o elemento for uma string, transforma-a em maiúsculas
      return element.toUpperCase();
    } else {
      // Se o elemento não for número nem string, retorna o próprio elemento
      return element;
    }
  });

  console.log(atividade);

  //PARTE 2 - USANDO FILTER
  var resultado = dados.filter((element) => typeof element === 'number');

   console.log(resultado)

//PARTE 3 - USANDO REDUCE

var total = dados.reduce((soma, elemento) => {
    if (typeof elemento === "number") {
  
        return soma + elemento;
    
      } else {
    
        return soma;
}}, 0);
  
console.log("Soma:", total)
