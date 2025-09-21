// El priipal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [ ];
// funcion para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === ' ') {
        alert ('Por favor, ingresa un nombre válido');
        input.focus();
        return;
    }
    
    if (/\d/. test(nombre)){
        alert('El nomnbre no puede contener numeros.');
        input.focus();
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya esta en la lista.");
        input.focus();
        return;
    }
    if (nombre.length > 30) {
        alert("El nombre es muy largo. Maximo 30 caracteres.");
        input.focus();
        return;
    }

    amigos.push(nombre);

    input.value = ' ';
    input.focus();

    actualizarListaAmigos()

    limpiarResultado ();

    console.log("Amigos actuales:", amigos);
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = " ";

    if (amigos.length === 0) {
        return;
    }

    amigos.forEach ((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="friend-name">${amigo}</span>
            <button class="button-delete" onclick="eliminarAmigo(${index})" title="Eliminar amigo" aria-label="Eliminar ${amigo}">
                ✕
            </button>`;
        lista.appendChild(li);
    })
}

function eliminarAmigo (index) {
    if (index >= 0 && index < amigos.length) {
        const nombreEliminado = amigos[index];
        amigos.splice(index, 1);
        actualizarListaAmigos ();
        limpiarResultado();
        console.log(`Amigo "${nombreEliminado}" eliminado. Lista actual: `, amigos );

    }
}

function sortearAmigo (){
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear. Agrega al menos un nombre:');
        document.getElementById('amigo').focus();
        return;
    }
    limpiarResultado();

    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoGanador = amigos[indiceAleatorio];

    mostrarResultado(amigoGanador);
    console.log('Amigo sorteado: ', amigoGanador);

}

//funcion para mostrar el resultado
function mostrarResultado (ganador) {
    const resultado = document.getElementById('resultado');
    // crea el elemento de resultado
    const li = document.createElement('li')

    li.innerHTML = `
        <span class="winner-text">🎉 El amigo secreto sorteado es:</span>
        <span class="winner-name">${ganador}</span>
    `;
    li.className = 'winner-result';

    //agregar el resultado a la lista
    resultado.appendChild(li);

    resultado.scrollIntoView({behavior: 'smooth'});
}

//funcion para limpiar el resultado anterior
function limpiarResultado(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// funcion para validar entreada al presionar teclas
function validaEntrada(event){
    const input = event.target;
    const tecla = event.key;

    if (tecla === 'Enter'){
        event.preventDefault();
        agregarAmigo();
        return;
    }

    // evitar caracteres especiales no deseados
    const caracteresPermitidos = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]$/;

    // permitir teclas de control
    if (tecla.length === 1 && !caracteresPermitidos.test(tecla)){
        event.preventDefault();
        return False;
    }
}
