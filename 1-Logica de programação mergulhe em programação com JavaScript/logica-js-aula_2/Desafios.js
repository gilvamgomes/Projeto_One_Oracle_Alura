//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0;
while (contador != 10) {    
    contador = contador + 1;
    console.log(contador);
}

//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 11;
while (contador != 0) {    
    contador = contador - 1;
    console.log(contador);
}

//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador = prompt('Digite um número');
while (contador != 0) {       
    console.log(contador);
    contador = contador - 1;
}

//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numero = prompt('Digite um número');  
let contador = 0;
while (contador < numero) {    
    console.log(contador);
    contador = contador + 1;  
}
