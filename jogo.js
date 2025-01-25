const canhao = document.querySelector("#c");
let angulo = -120;
canhao.style.transform = `rotate(${angulo}deg)`;

document.addEventListener("keydown", giraHorario);
document.addEventListener("keydown", giraAntiHorario);


function giraHorario(evento) {
    if(evento.key!="d") return;
    
  angulo = angulo + 20;
  canhao.style.transform = `rotate(${angulo}deg)`;
}

function giraAntiHorario(evento) {
    if(evento.key!="a") return;
    angulo = angulo - 20;
    canhao.style.transform = `rotate(${angulo}deg)`;
  }
