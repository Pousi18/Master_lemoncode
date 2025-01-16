// Elementos del DOM
const numeroTurnoElement = document.getElementById("numero-turno");
const anteriorButton = document.getElementById("anterior");
const siguienteButton = document.getElementById("siguiente");
const resetButton = document.getElementById("reset");
const turnoOperador = document.getElementById("turno-operador");
const nuevo = document.getElementById("nuevo-turno");

// Validar elementos con instanceof
if (
    numeroTurnoElement instanceof HTMLElement &&
    anteriorButton instanceof HTMLButtonElement &&
    siguienteButton instanceof HTMLButtonElement &&
    resetButton instanceof HTMLButtonElement &&
    turnoOperador instanceof HTMLButtonElement &&
    nuevo instanceof HTMLInputElement
) {
    // Turno inicial
    let turnoActual: number = 0;

    // Actualizar turno
    const actualizaTurno = () => {
        numeroTurnoElement.textContent = turnoActual.toString().padStart(2, "0");
    };

    // Disminuir el turno
    const disminuirTurno = () => {
        turnoActual = Math.max(0, turnoActual - 1);
        actualizaTurno();
    };

    // Aumentar el turno
    const aumentaTurno = () => {
        turnoActual = Math.max(0, turnoActual + 1);
        actualizaTurno();
    };

    // Resetear el turno
    const resetTurno = () => {
        turnoActual = 0;
        actualizaTurno();
    };

    // Cambiar turno usando el valor del input
    const ponTurno = () => {
        turnoActual = parseInt(nuevo.value);
        turnoActual = Math.max(0, turnoActual);
        actualizaTurno();
    };


    // Clicks del ratón
    siguienteButton.addEventListener("click", aumentaTurno);
    anteriorButton.addEventListener("click", disminuirTurno);
    resetButton.addEventListener("click", resetTurno);
    turnoOperador.addEventListener("click", ponTurno);
}





