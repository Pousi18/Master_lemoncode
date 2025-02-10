//Número aleatorio del 1 al 6
document.addEventListener("DOMContentLoaded", () => {
    
    
    const buttonTirar = document.getElementById("tirar") as HTMLButtonElement;
    const buttonPlantarse = document.getElementById("plantarse") as HTMLButtonElement;
    const puntosAcumulados = document.getElementById("puntos-acumulados") as HTMLDivElement;
    const puntosResultado = document.getElementById("resultado-partida") as HTMLDivElement;
    const imagenCarta = document.getElementById("dado") as HTMLImageElement;
    const buttonReiniciar = document.getElementById("reiniciar") as HTMLButtonElement;
    //Puntuación dado actual
    
    let puntosActuales = 0;

    function dadoAleatorio (){

        const numeroDado = numeroAleatorio();
        mostrarDado(numeroDado);
        mostrarSumaDado(numeroDado);

    }

    buttonTirar.addEventListener("click" , dadoAleatorio);
    
    function numeroAleatorio(): number {
        return Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
    }


    function mostrarPuntuacion(){

        puntosAcumulados.textContent = `Los puntos acumulados son: ${puntosActuales}`;

    }

    function mostrarDado(dado : number){

        switch(dado){
            case 1:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara1.png"
            break;
            case 2:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara2.png"
            break;
            case 3:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara3.png"
            break;
            case 4:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara4.png"
            break;
            case 5:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara5.png"
            break;
            case 6:
            imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/dados/cara6.png"
            break;

            default:            
            
            console.error("Carta no reconocida");
            
        }


    }


    function mostrarSumaDado (dado: number) {

        if(dado===6){

            puntosResultado.textContent = `Sacaste el número 6 y has perdido la partida`;
            bloquearBotones();
            return;
        }

        puntosActuales = puntosActuales + dado;

        

        mostrarPuntuacion();

        if(puntosActuales>50){
            puntosResultado.textContent = `Has perdido`;
            bloquearBotones();

        }else if(puntosActuales===50){
            puntosResultado.textContent = `Has acertado`;
            bloquearBotones();
        }
    }


function plantarse () {

    mostrarPuntuacion();
    puntosResultado.textContent = `Te has plantado con ${puntosActuales} puntos.`;
    bloquearBotones();

}

buttonPlantarse.addEventListener("click" , plantarse)

 function bloquearBotones () {

    buttonTirar.disabled = true;
    buttonPlantarse.disabled = true;
 }


 function reiniciarJuego () {

    puntosActuales = 0;

    puntosAcumulados.textContent = `Los puntos acumulados son: 0`;

    puntosResultado.textContent = ""

    buttonTirar.disabled = false;
    buttonPlantarse.disabled = false;

    imagenCarta.src = "img/imagen_dado.jpg";



 }

buttonReiniciar.addEventListener("click" , reiniciarJuego);


});