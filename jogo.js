const canhao = document.querySelector("#canhao");
const tiro = document.querySelector("#t");
const bolhas = document.querySelectorAll(".bolha");
// Largura e altura da tela
let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;

document.querySelector("main").style.width = `${larguraTela}px`;
document.querySelector("main").style.height = `${alturaTela}px`;

// Variáveis iniciais
const dt = 16 / 1000;
let vAngulo = 0;
let angulo = -90;
const vTiro = 100;

tiroposicaoInicial();
let tempoRestante = 60;
let jogoAtivo = true;
let pontuacao = 0;

let vTop = -vTiro * Math.sin((angulo / 180) * Math.PI);
let vLeft = vTiro * Math.cos((angulo / 180) * Math.PI);

// Posição inicial do tiro
function tiroposicaoInicial() {
  tiro.style.top = `${alturaTela - 80}px`;
  tiro.style.left = `${larguraTela / 2 - 15 / 2}px`;
}

bolhas.forEach((bolha) => inicializarBolha(bolha));
function inicializarBolha(bolha) {
  bolha.style.left = `${Math.random() * larguraTela}px`;
  bolha.style.top = `${-120 + Math.random() * 80}px`;
}

canhao.style.transform = `rotate(${angulo + 90}deg)`;
document.addEventListener("keydown", quandoTeclaPressionada);
document.addEventListener("keyup", quandoTeclaSolta);

function giraHorario() {
  vAngulo = 20;
}

function giraAntiHorario() {
  vAngulo = -20;
}

function quandoTeclaPressionada(evento) {
  switch (evento.key) {
    case "a":
      giraAntiHorario();
      break;
    case "d":
      giraHorario();
      break;
    default:
      break;
  }
}

function quandoTeclaSolta(evento) {
  switch (evento.key) {
    case "a":
      vAngulo = 0;
      break;
    case "d":
      vAngulo = 0;
      break;
    default:
      break;
  }
}

window.setInterval(passo, dt);

function passo() {
  for (let i = 0; i < bolhas.length; i++) {
    const bolha = bolhas[i];
    let top = parseFloat(bolha.style.top);
    top = top + 50 * dt;
    if (top > alturaTela) {
      top = -120 + Math.floor(80 * Math.random());
      let left = Math.floor(larguraTela * Math.random());
      bolha.style.left = `${left}px`;
    }
    bolha.style.top = `${top}px`;
  }

  let tiroTop = parseFloat(tiro.style.top);
  let tiroLeft = parseFloat(tiro.style.left);

  tiroTop = tiroTop - vTop * dt;
  tiroLeft = tiroLeft + vLeft * dt;
  tiro.style.top = `${tiroTop}px`;
  tiro.style.left = `${tiroLeft}px`;
  if (
    tiroTop < -15 ||
    tiroTop > alturaTela ||
    tiroLeft < -15 ||
    tiroLeft > larguraTela
  ) {
    tiroposicaoInicial();
    vTop = -vTiro * Math.sin((angulo / 180) * Math.PI);
    vLeft = vTiro * Math.cos((angulo / 180) * Math.PI);
  }
  angulo = angulo + vAngulo * dt;
  canhao.style.transform = `rotate(${angulo + 90}deg)`;

  verificaColisoes();
}

function verificaColisoes() {
  for (let i = 0; i < bolhas.length; i++) {
    const bolha = bolhas[i];
    if (colidiu(bolha, tiro)) {
      bolha.style.top = `${alturaTela + 50}px`;
      tiro.style.top = `${alturaTela + 50}px`;
      pontuacao += 5;
      document.getElementById("pontuacao").innerText = `${pontuacao}`;
    }
  }
}

function colidiu(a, b) {
  const boxA = a.getBoundingClientRect();
  const boxB = b.getBoundingClientRect();
  return !(
    boxA.bottom < boxB.top ||
    boxA.top > boxB.bottom ||
    boxA.right < boxB.left ||
    boxA.left > boxB.right
  );
}

const intervaloJogo = setInterval(passo, dt);
const contadorTempo = setInterval(() => {
  if (tempoRestante > 0) {
    tempoRestante--;
    document.getElementById("tempo").innerText = `${tempoRestante}s`;
  } else {
    clearInterval(intervaloJogo);
    clearInterval(contadorTempo);
    jogoAtivo = false;
  }
}, 1000);
