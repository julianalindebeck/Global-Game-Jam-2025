const canhao = document.querySelector("#c");
const tiro = document.querySelector("#t");
const bolhas = document.querySelectorAll(".bolha");

//inicia elemento
tiro.style.top = "320px";

for (let i = 0; i < bolhas.length; i++) {
  const bolha = bolhas[i];
  let top = -120 + Math.floor(80 * Math.random());
  let left = Math.floor(440 * Math.random());
  bolha.style.left = `${left}px`;
  bolha.style.top = `${top}px`;
}

let angulo = 0;
canhao.style.transform = `rotate(${angulo}deg)`;

document.addEventListener("keydown", quandoTeclaPressionada);

function giraHorario() {
  angulo = angulo + 20;
  canhao.style.transform = `rotate(${angulo}deg)`;
}

function giraAntiHorario() {
  angulo = angulo - 20;
  canhao.style.transform = `rotate(${angulo}deg)`;
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

const dt = 16/1000;
window.setInterval(passo, dt);

function passo() {
  for (let i = 0; i < bolhas.length; i++) {
    const bolha = bolhas[i];
    let top = parseFloat(bolha.style.top);
    top = top + 50*dt;
    if (top > 340) {
        top = -120 + Math.floor(80 * Math.random());
        let left = Math.floor(440 * Math.random());
        bolha.style.left = `${left}px`;
    }
    bolha.style.top = `${top}px`;
  }

  let tiroTop = parseFloat(tiro.style.top);
  tiroTop = tiroTop - 80*dt;
  tiro.style.top = `${tiroTop}px`;
  if (tiroTop < -15) {
    tiro.style.top = "320px";
  }
}


