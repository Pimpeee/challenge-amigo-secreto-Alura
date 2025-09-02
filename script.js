// Array para almacenar la lista de amigos.
let amigos = [];

// Función para agregar un amigo a la lista.
function agregar() {
    // 1. Obtener el campo de texto y el valor ingresado.
    let campoNombre = document.getElementById('nombre-amigo');
    let nombre = campoNombre.value.trim(); // .trim() elimina espacios en blanco al inicio y final.

    // 2. Validar que el campo no esté vacío.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la función si no hay nombre.
    }

    // 3. Agregar el nombre al array de amigos.
    amigos.push(nombre);

    // 4. Limpiar el campo de texto para el próximo nombre.
    campoNombre.value = '';

    // 5. Actualizar la lista visible en la pantalla.
    actualizarLista();
}

// Función para mostrar la lista de amigos en la página.
function actualizarLista() {
    let listaHTML = document.getElementById('lista-amigos');
    listaHTML.innerHTML = amigos.join(', '); // Une los nombres con una coma y espacio.
}

// Función para realizar el sorteo.
function sortear() {
    // 1. Validar que haya al menos dos amigos en la lista.
    if (amigos.length < 2) {
        alert('Agrega al menos dos nombres para poder sortear.');
        return;
    }

    // 2. Generar un número aleatorio que corresponda a un índice del array.
    // Math.random() genera un número entre 0 y 0.99...
    // Lo multiplicamos por la cantidad de amigos para que el rango sea de 0 hasta (cantidad-1).
    // Math.floor() redondea hacia abajo para obtener un número entero.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre del amigo sorteado usando el índice aleatorio.
    const amigoSecreto = amigos[indiceSorteado];

    // 4. Mostrar el resultado en la pantalla.
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
}