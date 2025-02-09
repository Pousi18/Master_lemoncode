window.addEventListener("DOMContentLoaded", () => {
 
// Aquí poner los botones y el div

const imagenCarta = document.getElementById("imagenCarta") as HTMLImageElement;

const botonSolicitar = document.getElementById("solicitar") as HTMLButtonElement;

const botonPlantarse = document.getElementById("plantarse") as HTMLButtonElement;

const mostrarPuntuacion = document.getElementById("puntuacion") as HTMLDivElement;

const mensajePuntuacion = document.getElementById("mensaje-puntuacion") as HTMLDivElement;

const mensajePuntuacionSimulacion = document.getElementById("mensaje-simulacion") as HTMLDivElement;


const botonNuevaPartida = document.getElementById("nueva-partida") as HTMLDivElement;

const botonQueHabriaPasado = document.getElementById("pasado") as HTMLButtonElement;


// mostrarPuntuacion != null && mostrarPuntuacion != undefined && mostrarPuntuacion instanceof HTMLInputElement , lado del servidor ;


// Poner puntaje del jugador

let puntuacionJugador = 0;

 
    
    function cartaAleatoria  ()  {

        const numeroCarta = obtenerCarta();

        mostrarCarta(numeroCarta);

        sumarPuntuacion(numeroCarta);


        //se puede hacer con if else, funcion padre de obtener y mostrar carta
    }

    botonSolicitar.addEventListener("click", cartaAleatoria);  

//  Poner el número aleatorio

    function obtenerCarta () {

        //Numero aleatorio 

        const numero = Math.floor(Math.random()*10) + 1;

        //Las figuras sota , caballo y rey valen 0.5
 
        return numero > 7 ? numero + 2 : numero;

    }

//Poner el switch para mostrar la carta y su imagen

    function mostrarCarta (numeroCarta:number) {

        switch(numeroCarta){

            case 1:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

            break;

            case 2: 

            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

            break;
            
            case 3:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

            break;

            case 4:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            
            break;

            case 5:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            
            break;

            case 6:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

            break;

            case 7:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

            break;

            case 10:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

            break;

            case 11:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

            break;

            case 12:
            
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

            break;

            default:            
            
            console.error("Carta no reconocida");

            
        }


    }

    function calcularPuntuacionCarta (numeroCarta:number){
        const puntuacion = numeroCarta >= 10 ? 0.5 : numeroCarta;
        puntuacionJugador = puntuacionJugador + puntuacion;
    }


//Pongo una funcion para mostrar la puntuación del jugador
     
    function muestraPuntuacion (){

         mostrarPuntuacion.textContent = `Puntuacion: ${puntuacionJugador} ` ;
         
    
    }

     
//Pongo la suma de la puntuacion y si pasa de 7.5 que de game over
    
    function sumarPuntuacion(numeroCarta : number){

    calcularPuntuacionCarta(numeroCarta);

    muestraPuntuacion();

    if(puntuacionJugador > 7.5){
        alert ("Game over: ¡Te has pasado de 7.5 puntos");
        botonNuevaPartida.style.display = "block";
        botonSolicitar.disabled = true;
    }


    }

// función boton me planto y que pase por el div el mensaje y quite los botones

    function mePlanto (){
        botonNuevaPartida.style.display = "block"; //Ver display 
        botonSolicitar.disabled = true;    
        botonPlantarse.disabled = true;   
        botonQueHabriaPasado.style.display = "block";


if(puntuacionJugador<4){

    mensajePuntuacion.textContent = `Has sido muy conservador`

}else if(puntuacionJugador===5){

    mensajePuntuacion.textContent = `Te ha entrado el cangelo eh?`

}else if(puntuacionJugador === 6 || puntuacionJugador === 7){

    mensajePuntuacion.textContent = `Casi , casi`

}else if (puntuacionJugador === 7.5){

    mensajePuntuacion.textContent = `¡Los has clavado! ¡Enhorabuena!`

}

    }

    botonPlantarse.addEventListener("click", mePlanto);


//Funcion nueva partida

function nuevaPartida (){
    //Esconder boton al hacer click y volver a mostrarlo cuando ha terminado o plantado
    botonNuevaPartida.style.display = "none";
    botonSolicitar.disabled = false;
    botonPlantarse.disabled = false;
    puntuacionJugador = 0;
    muestraPuntuacion();
    imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/back.jpg";
    mensajePuntuacion.textContent = ""; // Limpiar mensaje de puntuación
    mensajePuntuacionSimulacion.textContent = ""; // Limpiar mensaje de simulación
}

botonNuevaPartida.addEventListener("click", nuevaPartida);



function pedirCartas () {

    let simulacionPuntosCarta = puntuacionJugador;


    const cartaSimulada = obtenerCarta();

    simulacionPuntosCarta += cartaSimulada >= 7 ? 0.5 : cartaSimulada

    if(simulacionPuntosCarta<4){

        mensajePuntuacionSimulacion.textContent = `Has sido muy conservador`
    
    }else if(simulacionPuntosCarta===5){
    
        mensajePuntuacionSimulacion.textContent = `Te ha entrado el cangelo eh?`
    
    }else if(simulacionPuntosCarta === 6 || puntuacionJugador === 7){
    
        mensajePuntuacionSimulacion.textContent = `Casi , casi`
    
    }else if (simulacionPuntosCarta === 7.5){
    
        mensajePuntuacionSimulacion.textContent = `¡Los has clavado! ¡Enhorabuena!`
    
    }


}

botonQueHabriaPasado.addEventListener("click", pedirCartas);


});















