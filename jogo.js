const canhao = document.querySelector("#c");
const bolhas = document.querySelectorAll(".bolha");
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

window.setInterval(passo, 1000);

function passo() {
  for (let i = 0; i < bolhas.length; i++) {
    const bolha = bolhas[i];
    let top = bolha.style.top;
    let left = 0;
    if (top) {
        
        top = parseInt(bolha.style.top);
        top = top + 20;
    } else {
        top = 0;
        left = Math.floor(440 * Math.random());
        bolha.style.left = `${left}px`;
    }
    bolha.style.top = `${top}px`;
  }
}

  