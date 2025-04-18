let segundos = 0;
let timer = null;

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnRestart = document.getElementById("restart");

function atualizarTempo() {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const seg = segundos % 60;

    document.getElementById("horas").textContent = String(horas).padStart(2, '0');
    document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
    document.getElementById("segundos").textContent = String(seg).padStart(2, '0');
}

function iniciar() {
    if (timer !== null) return;

    timer = setInterval(() => {
        segundos++;
        atualizarTempo();
    }, 1000);

    btnStart.textContent = "Começar";
}

function pausar() {
    clearInterval(timer);
    timer = null;

    btnStart.textContent = "Despausar";
}

function reiniciar() {
    pausar();
    segundos = 0;
    atualizarTempo();
    btnStart.textContent = "Começar";
}

function animarBotao(botao) {
    botao.classList.add('clicked');
    setTimeout(() => botao.classList.remove('clicked'), 200);
}

btnStart.addEventListener("click", (e) => {
    iniciar();
    animarBotao(e.target);
});

btnPause.addEventListener("click", (e) => {
    pausar();
    animarBotao(e.target);
});

btnRestart.addEventListener("click", (e) => {
    reiniciar();
    animarBotao(e.target);
});
