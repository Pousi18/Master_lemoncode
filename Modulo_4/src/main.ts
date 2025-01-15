//Elementos del Dom

const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const anterior = document.getElementById("anterior") as HTMLElement;
const siguiente = document.getElementById("siguiente") as HTMLElement;
const reset = document.getElementById("reset") as HTMLElement;

//Turno inicial

let turnoActual : number = 0;

//Actualizar turno

const actualizaTurno = () => {

    numeroTurno.textContent = turnoActual.toString().padStart(2,"0");

}

//Disminuir el turno

const disminuirTurno = () => {

    turnoActual = Math.max(0, turnoActual - 1);
    actualizaTurno ();

}


// Aumento turno

const aumentaTurno = () => {

    turnoActual = Math.max(0, turnoActual + 1);
    actualizaTurno();
}

//Reseteo el turno

const resetTurno = () => {

    turnoActual = 0;
    actualizaTurno();

}





//Acciones de click


siguiente.addEventListener("click" , aumentaTurno);

anterior.addEventListener("click" , disminuirTurno);

reset.addEventListener("click" , resetTurno);





