var valores = [8,1,7,2,9];

console.log(valores[0])

for ( var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição:" + valores[pos])
}

var carros =[];
carros[0] = "Volvo";
carros[1] = "Jeep";


var motos = new Array("BMW", "Yamaha", "Honda");

// Calcular a média dos valores de um Array

var somaArray = 0;

for ( var pos = 0 ; pos < valores.length; pos++){
    somaArray += valores[pos];
}

var media = somaArray/valores.length;

console.log(media)

