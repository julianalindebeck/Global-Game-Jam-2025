const canhao = document.querySelector("#c");
const tiro = document.querySelector("#t");
const bolhas = document.querySelectorAll(".bolha");

//inicia elemento
const dt = 16/1000;
let angulo = -90;
const vTiro = 100;
tiro.style.top = "305px";
tiro.style.left = `${480/2 - 15/2}px`;

let vTop = -vTiro*Math.sin(angulo/180*Math.PI);
let vLeft = vTiro*Math.cos(angulo/180*Math.PI);
debugger
for (let i = 0; i < bolhas.length; i++) {
  const bolha = bolhas[i];
  let top = -120 + Math.floor(80 * Math.random());
  let left = Math.floor(440 * Math.random());
  bolha.style.left = `${left}px`;
  bolha.style.top = `${top}px`;
}

canhao.style.transform = `rotate(${angulo+90}deg)`;
debugger
document.addEventListener("keydown", quandoTeclaPressionada);

function giraHorario() {
  angulo = angulo + 20;
  canhao.style.transform = `rotate(${angulo+90}deg)`;
}

function giraAntiHorario() {
  angulo = angulo - 20;
  canhao.style.transform = `rotate(${angulo+90}deg)`;
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
  let tiroLeft = parseFloat(tiro.style.left);

  tiroTop = tiroTop - vTop*dt;
  tiroLeft = tiroLeft + vLeft*dt;
  tiro.style.top = `${tiroTop}px`;
  tiro.style.left = `${tiroLeft}px`;
  if (tiroTop < -15 || tiroTop > 320 || tiroLeft<-15 ||tiroLeft>495) {
    tiro.style.top = "305px";
    tiro.style.left = `${480/2 - 15/2}px`;
    vTop = -vTiro*Math.sin(angulo/180*Math.PI);
    vLeft = vTiro*Math.cos(angulo/180*Math.PI);

  }
}


