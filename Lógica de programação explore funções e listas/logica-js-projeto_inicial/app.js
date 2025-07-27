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