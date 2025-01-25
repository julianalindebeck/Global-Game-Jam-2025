const canhao = document.querySelector("#c");
let angulo = -120;
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
