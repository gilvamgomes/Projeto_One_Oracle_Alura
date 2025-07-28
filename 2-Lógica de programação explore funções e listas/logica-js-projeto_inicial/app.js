//1.Criar uma função que exibe "Olá, mundo!" no console.
function ola(){
    console.log("Olá, mundo!");
}

//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

//usa-se assim no consele: recebeNome('Ana')
function recebeNome(nome) {
    console.log(`Olá, ${nome}!`);
}

//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function dobro(numero){
    return numero * 2;
}

//4.riar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDeTres(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorDeles(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacaoPorEleMesmo(numero){
    return numero * numero;
}

//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoDoImc(altura, peso){
    let imc =  peso / (altura * altura);
    return `Altura: ${altura}m, Peso: ${peso}kg, IMC: ${imc.toFixed(2)}`;
}  

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero){
    let resultado = 1;
    for (let i = numero; i > 1; i--){
        resultado *= i;
    }
    return resultado;
}

//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversorDolarReal(valorEmDolar){
    let valorDollar = 4.80;
    let valorReal = valorEmDolar * valorDollar;
    return valorReal;
}

//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro
function areaEperimetroRetangulo(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `Área: ${area}m², Perímetro: ${perimetro}m`;
}

//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14
function areaEperimetroCircular(raio){
    const pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;
    return `Área: ${area.toFixed(2)}m², Perímetro: ${perimetro.toFixed(2)}m`;
}

//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


//1.Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2.Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagemDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

//3.Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagemDeProgramacao.push('Java', 'Ruby', 'GoLango');

//4.Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento
listaGenerica.push(1,2,3);
//listaGenerica[0]

//5.Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaDeNomes = ['Ana', 'Bruno', 'Carlos'];

//6.Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaDeNomes2 = ['Ana', 'Bruno', 'Carlos'];
console.log(listaDeNomes2[listaDeNomes2.length - 1]);
