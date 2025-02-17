//Hay que generar el numero aleatorio

let puntuacionJugador = 0;

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

//Obtener el numero de la carta

const obtenerNumeroCarta = (numeroAleatorio: number): number => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

//Calcular los puntos de la carta

const obtenerPuntosCarta = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

//Imagen de la carta boca abajo

const mostrarImagenCarta = (urlDeCarta: string): void => {
  const imagenCarta = document.getElementById("imagenCarta");
  if (
    imagenCarta !== null &&
    imagenCarta !== undefined &&
    imagenCarta instanceof HTMLImageElement
  ) {
    imagenCarta.src = urlDeCarta;
  }
};

//Poner cada carta con su imagen correspondiente

const obtenerImagenCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "Carta no reconocida";
  }
};

//Pongo una funcion para mostrar la puntuación del jugador y sus puntos actuales

const muestraPuntuacionJugador = (puntosActuales: number) => {
  const mostrarPuntuacion = document.getElementById("puntuacion");
  if (
    mostrarPuntuacion !== null &&
    mostrarPuntuacion !== undefined &&
    mostrarPuntuacion instanceof HTMLDivElement
  ) {
    mostrarPuntuacion.textContent = `Puntuacion: ${puntuacionJugador} `;
  }

  puntuacionJugador = puntosActuales;
};

//Suma de la puntuacion

const sumarPuntuacionJugador = (puntos: number): number => {
  return puntuacionJugador + puntos;
};

const actualizarPuntuacionJugador = (puntosSumados: number) => {
  puntuacionJugador = puntosSumados;
}

const obtenerMensajeCuandoComprueboPartida = () => {
  if (puntuacionJugador < 4) {
    return `Has sido muy conservador`;
  } else if (puntuacionJugador === 5) {
    return `Te ha entrado el cangelo eh?`;
  } else if (puntuacionJugador === 6 || puntuacionJugador === 7) {
    return `Casi , casi`;
  } else if (puntuacionJugador === 7.5) {
    return `¡Los has clavado! ¡Enhorabuena!`;
  } else if (puntuacionJugador > 7.5) {
    return `Game over`;
  } else {
    return "";
  }
}

const bloquearBotonSolicitarCarta = (estaBloqueado: boolean) => {
  const botonSolicitarCarta = document.getElementById('solicitar');

  if (botonSolicitarCarta !== null && botonSolicitarCarta !== undefined && botonSolicitarCarta instanceof HTMLButtonElement) {
    botonSolicitarCarta.disabled = estaBloqueado;
  }
}

//Comprobar los puntos y mensajes de estado

const comprobarPartida = () => {
  if (puntuacionJugador === 7.5) {
    mostrarMensaje('he ganado');
    bloquearBotonSolicitarCarta(true);
  }

  if (puntuacionJugador > 7.5) {
    mostrarMensaje('he perdido');
    bloquearBotonSolicitarCarta(true);
  }
};


const plantarse = () => {
  const mensaje = obtenerMensajeCuandoComprueboPartida();
  mostrarMensaje(mensaje);
};

//Todas las funciones al pedir la carta

const solicitarCarta = () => {
  const cartaAleatoria = numeroAleatorio();
  const carta = obtenerNumeroCarta(cartaAleatoria);
  const urlCarta = obtenerImagenCarta(carta);
  mostrarImagenCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntuacionJugador(puntosCarta);
  actualizarPuntuacionJugador(puntosSumados);
  muestraPuntuacionJugador(puntosSumados);
  comprobarPartida();
};
//solo se ejecuta al hacer click
//Boton de pedir carta

const botonSolicitarCarta = document.getElementById("solicitar");
if (
  botonSolicitarCarta !== null &&
  botonSolicitarCarta !== undefined &&
  botonSolicitarCarta instanceof HTMLButtonElement
) {
  botonSolicitarCarta.addEventListener("click", solicitarCarta);
}

//Función de reiniciar el juego al pedir la carta

const nuevaPartida = () => {
  mostrarImagenCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/back.jpg"
  );
  puntuacionJugador = 0;
  muestraPuntuacionJugador(puntuacionJugador);
  bloquearBotonSolicitarCarta(false);
};

//Botón nueva partida

const botonNuevaPartida = document.getElementById("nueva-partida");
if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}

//Me quedo aquí para la meet del día siguiente

// Calcular la puntuación de simulación

// const calcularPuntosSimulacion = (puntuacionActual: number): number => {
//   const cartaSimulacion = numeroAleatorio();

//   const carta = obtenerNumeroCarta(cartaSimulacion);

//   const PuntosCartaSimulada = obtenerPuntosCarta(carta);

//   return (puntuacionActual += PuntosCartaSimulada);
// };

//Obtener mensaje simulación

const obtenerMensajeSimulacion = (simulacionPuntuacion: number): string => {
  if (simulacionPuntuacion > 7.5) {
    return "Si hubieras continuado, te habrías pasado y perdido.";
  } else if (simulacionPuntuacion === 7.5) {
    return "Si hubieras seguido, podrías haber ganado.";
  } else {
    return "Si hubieras seguido, podrías haber continuado sin pasarte.";
  }
};

//Mostrar mensaje en dom

const mostrarMensaje = (mensaje: string): void => {
  const mensajeSimulacion = document.getElementById("mensaje-simulacion");
  if (
    mensajeSimulacion !== null &&
    mensajeSimulacion !== undefined &&
    mensajeSimulacion instanceof HTMLDivElement
  ) {
    mensajeSimulacion.textContent = mensaje;
  }
};

//Función principal que hubiera pasado

const simularQueHubieraPasado = () => {
  const numeroAleatorioSimulado = numeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorioSimulado);
  const urlCartaSimulada = obtenerImagenCarta(carta);
  mostrarImagenCarta(urlCartaSimulada);
  const puntuacionSimulada = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntuacionJugador(puntuacionSimulada);
  actualizarPuntuacionJugador(puntosSumados);
  const mensajeDeSimulacion = obtenerMensajeSimulacion(puntuacionJugador);
  mostrarMensaje(mensajeDeSimulacion);
};

//Botón de que hubiera pasado

const botonPasado = document.getElementById("pasado");
if (
  botonPasado !== null &&
  botonPasado !== undefined &&
  botonPasado instanceof HTMLButtonElement
) {
  botonPasado.addEventListener("click", simularQueHubieraPasado);
}

const botonPlantarse = document.getElementById('plantarse');

if (
  botonPlantarse !== null &&
  botonPlantarse !== undefined &&
  botonPlantarse instanceof HTMLButtonElement
) {
  botonPlantarse.addEventListener("click", plantarse);
}


