/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";
 */
/* 
let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
 */

let intentos = 0;

// Creamos una función para no repetir la inserción de elementos y textos

const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(
        document.getElementById("valorUsuario").value
    );

    console.log(numeroSecreto);
    console.log("intentos", intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(
            "p",
            `Acertaste el número secreto en ${intentos} ${
                intentos === 1 ? "vez" : "veces"
            }!!`
        );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario NO acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

const limpiarCaja = () => {
    document.querySelector("#valorUsuario").value = "";
};

const generarNumeroSecreto = () => {
    return Math.floor(Math.random() * 10) + 1;
};

let numeroSecreto = generarNumeroSecreto();

const condicionesIniciales = () => {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica el número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

const reiniciarJuego = () => {
    // Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
};

condicionesIniciales();
