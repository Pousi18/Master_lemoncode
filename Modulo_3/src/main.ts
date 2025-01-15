/*Grupos musicales
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.*/


// Creo la interfaz de los grupos musicales

interface GruposMusicales {
    Nombre_del_grupo: String;
    Cantante: String; 
    Compositor: String;
    Año_de_fundación: number;
    Activo: boolean;
    Género: String;

}

// Creo las constantes 

// La primera constante con las características definidas por el ejercicio

const estiloTitulo = "color:green; font-size:20px; font-weight:bold";

// Segunda constante de los grupos



const The_beatles : GruposMusicales = {

    Nombre_del_grupo: "The beatles",
    Cantante: "John Lennon", 
    Compositor: "Lennon y McCartney",
    Año_de_fundación: 1960,
    Activo: false,
    Género: "Pop Rock",

}

const Queen : GruposMusicales = {

    Nombre_del_grupo: "Queen",
    Cantante: "Freddie Mercury", 
    Compositor: "Freddie Mercury",
    Año_de_fundación: 1970,
    Activo: false,
    Género: "Rock",

}


const Acdc : GruposMusicales = {

    Nombre_del_grupo: "AC/DC",
    Cantante: "Brian Johnson", 
    Compositor: "Brian Johnson",
    Año_de_fundación: 1973,
    Activo: true,
    Género: "Hard Rock",

}


const Beethoven : GruposMusicales = {

    Nombre_del_grupo: "Ludwig van Beethoven",
    Cantante: "Ludwig van Beethoven", 
    Compositor: "Ludwig van Beethoven",
    Año_de_fundación: 1770,
    Activo: false,
    Género: "Clásica",

}

const Rolling : GruposMusicales = {

    Nombre_del_grupo: "The Rolling Stones",
    Cantante: "Mick Jagger", 
    Compositor: "Mick Jagger y Keith Richards",
    Año_de_fundación: 1973,
    Activo: true,
    Género: "Rock",

}

//Muestro por consola el resultado

console.log("%cThe beatles 🎵", estiloTitulo , The_beatles);
console.log("%cQueen 🎸", estiloTitulo , Queen);
console.log("%cAC/DC 🤘", estiloTitulo , Acdc);
console.log("%cLudwig van Beethoven 🎼", estiloTitulo , Beethoven);
console.log("%cThe Rolling Stones 🎸", estiloTitulo , Rolling);