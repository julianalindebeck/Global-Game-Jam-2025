const canhao = document.querySelector("#c");
const tiro = document.querySelector("#t");
const bolhas = document.querySelectorAll(".bolha");

//inicia elemento
const dt = 16 / 1000;
let vAngulo = 0;
let angulo = -90;
const vTiro = 100;
tiro.style.top = "305px";
tiro.style.left = `${480 / 2 - 15 / 2}px`;

let vTop = -vTiro * Math.sin((angulo / 180) * Math.PI);
let vLeft = vTiro * Math.cos((angulo / 180) * Math.PI);
debugger;
for (let i = 0; i < bolhas.length; i++) {
  const bolha = bolhas[i];
  let top = -120 + Math.floor(80 * Math.random());
  let left = Math.floor(440 * Math.random());
  bolha.style.left = `${left}px`;
  bolha.style.top = `${top}px`;
}

canhao.style.transform = `rotate(${angulo + 90}deg)`;
debugger;
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
    if (top > 340) {
      top = -120 + Math.floor(80 * Math.random());
      let left = Math.floor(440 * Math.random());
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
  if (tiroTop < -15 || tiroTop > 320 || tiroLeft < -15 || tiroLeft > 495) {
    tiro.style.top = "305px";
    tiro.style.left = `${480 / 2 - 15 / 2}px`;
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
      bolha.style.top = "350px";
      tiro.style.top = "350px";
    }
  }
}

function colidiu(a, b) {
  const boxA = a.getBoundingClientRect();
  const boxB = b.getBoundingClientRect();
  if (
    boxA.bottom < boxB.top ||
    boxA.top > boxB.bottom ||
    boxA.right < boxB.left ||
    boxA.left > boxB.right
  ) {
    return false;
  }
  return true;
}
