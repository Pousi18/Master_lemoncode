// Elementos del DOM
const numeroTurnoElement = document.getElementById("numero-turno");
const anteriorButton = document.getElementById("anterior");
const siguienteButton = document.getElementById("siguiente");
const resetButton = document.getElementById("reset");
const turnoOperador = document.getElementById("turno-operador");
const nuevo = document.getElementById("nuevo-turno");

let turnoActual: number = 0;

const actualizaTurno = () => {

    if(numeroTurnoElement instanceof HTMLHeadingElement){
    numeroTurnoElement.textContent = turnoActual.toString().padStart(2, "0");
    }
};


const aumentaTurno = () => {
    turnoActual = Math.max(0, turnoActual + 1);
    actualizaTurno();
};

const disminuirTurno = () => {
    turnoActual = Math.max(0, turnoActual - 1);
    actualizaTurno();
};

const resetTurno = () => {
    turnoActual = 0;
    actualizaTurno();
};

const ponTurno = () => {
    if(nuevo instanceof HTMLInputElement){
        turnoActual = parseInt(nuevo.value);
        turnoActual = Math.max(0, turnoActual);
        actualizaTurno();
    }
    
};



if(turnoOperador instanceof HTMLButtonElement){

    turnoOperador.addEventListener("click", ponTurno);
}


if( resetButton instanceof HTMLButtonElement){

    resetButton.addEventListener("click", resetTurno);
}


if(anteriorButton instanceof HTMLButtonElement){

    anteriorButton.addEventListener("click", disminuirTurno);
 
}

if(siguienteButton instanceof HTMLButtonElement){
    siguienteButton.addEventListener("click", aumentaTurno);
}






