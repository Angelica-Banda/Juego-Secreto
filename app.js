let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(Elemento, texto) {
    let ElementoHTML = document.querySelector(Elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


        //el usuario no acertó
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número es menor');
        } else {
            asignarTextoElemento('p', 'el número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego Del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //si ya sorteamos todos los números
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

        // si el numero generado esta en la lista
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();

    //indicar mensaje, intentos, numeros aleatorios
    condicionesIniciales();

    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
