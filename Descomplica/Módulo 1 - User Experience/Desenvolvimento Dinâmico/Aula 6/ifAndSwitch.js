// UTILIZANDO IF
var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é entrangeiro");
}else{
    console.log("Você é brasileiro")
}

var idade = 66;

if(idade < 16){
    console.log("Não vota")
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório");
}

// UTILIZANDO SWITCH
diaSem = 8;

switch(diaSem){
    case 1: 
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda");
        break;
    case 3: 
        console.log("Terça");
        break;
    default:
        console.log("Esse dia da semana não existe!")
}
