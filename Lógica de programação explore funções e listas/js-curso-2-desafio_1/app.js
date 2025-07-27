let titulo = document.querySelector('h1');
titulo.textContent = 'Hora do Desafio';

function botaoConsole() {
    console.log('Botão Console foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Fale o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2} é ${soma}`);
}