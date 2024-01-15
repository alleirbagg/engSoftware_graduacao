// critérios de elegibilidade

var idadeMinima = 18;
var expMinima = 3;
var educacao = "superior";
var certificado = true;

// dados do candidato

var idade = 17;
var exp = 5;
var nivelEduc = "superior";
var possuiCertif = true;

//verificação da elegibilidade

var elegivel =
     idade >= idadeMinima &&
     exp >= expMinima &&
     (nivelEduc === educacao || possuiCertif) &&
     (!certificado || possuiCertif);

     console.log("Elegível para a vaga? " + elegivel);