// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Obtener el input
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Verificar si el campo no está vacío
    if (nombreAmigo !== "") {
        listaAmigos.push(nombreAmigo); // Agregar el nombre al array
        actualizarListaAmigos(); // Actualizar la lista en el HTML
        inputAmigo.value = ""; // Limpiar el input

        // Habilitar el botón "Sortear" si hay al menos dos nombres
        if (listaAmigos.length >= 2) {
            document.querySelector(".button-draw").disabled = false;
        }
    } else {
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si el campo está vacío
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigosHTML = document.getElementById("listaAmigos"); // Obtener el elemento <ul>
    listaAmigosHTML.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre a la lista
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre al <li>
        listaAmigosHTML.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (listaAmigos.length >= 2) {
        // Seleccionar un nombre aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[indiceAleatorio];

        // Mostrar el resultado en el área correspondiente
        const resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = `<li>El amigo secreto es:${amigoSecreto}</li>`; // Mostrar el nombre sorteado
    } else {
        alert("Debes agregar al menos dos nombres para sortear."); // Mostrar alerta si no hay suficientes nombres
    }
}

