var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosFiltrados = numeros.filter(
    function (valor) {
        return valor > 5;
    }
);
console.log(numerosFiltrados);


function buscarValores(valor) {
    return valor < 5;
};

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

var funcionarios = [
    { nome: "Luiz", idade: 62 },
    { nome: "Davi", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Lucas", idade: 40 },
]

var pessoasListagem = funcionarios.filter(
    function (valor) {
        return valor.nome.length < 5;

    })
console.log(pessoasListagem);

//Atividade: Fazer um filtro para aparecer somente categoria "eletronico"

var produtos = [
    { id: 1, descricao: "Smartphone", categoria: "Eletronico" },
    { id: 2, descricao: "Notebook", categoria: "Eletronico" },
    { id: 3, descricao: "Geladeira", categoria: "Eletrodomestico" },
    { id: 4, descricao: "Airfryer", categoria: "Eletrodomestico" },
];

var listarCategoria = produtos.filter(
    function (valor) {
        return valor.categoria === "Eletronico";

    });
console.log(listarCategoria);

//MÉTODO MAP

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numMap = num.map(function(valor){
    return valor * 2;
});

console.log(numMap);

var pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Davi", idade: 22 },
    { nome: "Arthur", idade: 18 },
    { nome: "Lucas", idade: 40 },
]

nomes = pessoas.map(id => id.nome);
console.log(nomes);

//MÉTODO REDUCE
var total = 0;

for(var i = 0; i < num.length; i++){
    total += num[i];
}
console.log(total);

var tot = num.reduce(function(total, numero){
    return total + numero;
})
console.log(tot)

//MÉTODO FOR EACH
var a = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor));

var t = 0;

a.forEach(valor => {
    t += valor;
})
console.log(t);

a.forEach(function(valor,indice,array){
    console.log(array[indice]);
})

