function jogarDados() {
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

function jogarCraps() {
    let ponto = 0;
    let jogoAtivo = true;
    let resultado;
    let primeiraRodada = true;

    while (jogoAtivo) {
        let valor = jogarDados();
        
        document.getElementById('numeroRolado').innerText = `Você rolou: ${valor}`;

        if (primeiraRodada) {
            if (valor === 7 || valor === 11) {
                resultado = "Natural! Você ganhou!";
                jogoAtivo = false;
            } else if (valor === 2 || valor === 3 || valor === 12) {
                resultado = "Craps! Você perdeu!";
                jogoAtivo = false;
            } else {
                ponto = valor;
                resultado = `Seu ponto é: ${ponto}. Continue jogando!`;
                primeiraRodada = false;
            }
        } else {
            if (valor === ponto) {
                resultado = "Você fez seu ponto novamente! Você ganhou!";
                jogoAtivo = false;
            } else if (valor === 7) {
                resultado = "Você tirou 7 antes de repetir o ponto. Você perdeu!";
                jogoAtivo = false;
            } else {
                resultado = `Você rolou ${valor}. Continue jogando!`;
            }
        }
        document.getElementById('mensagem').innerText = resultado;
    }
}

document.getElementById('botaoJogar').addEventListener('click', () => {
    jogarCraps();
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalRegras');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoFechar = document.getElementById('fecharModal');

    botaoFechar.addEventListener('click', () => {
        modal.classList.add('invisible'); 
        botaoJogar.disabled = false; 
    });
});
