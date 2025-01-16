// Inicializar un array para almacenar los nombres
const amigos = [];

// Función para agregar un amigo al array y actualizar la lista en pantalla
function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar que el nombre no esté vacío y no sea un duplicado
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en pantalla
    actualizarLista();
}

// Función para actualizar dinámicamente la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar el contenido previo

    // Crear un elemento de lista para cada amigo en el array
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// ---------------------------------------------------------------
//Esta de mas, pero me parece bueno
// Función para eliminar un amigo del array y actualizar la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el amigo del array
    actualizarLista(); // Actualizar la lista en pantalla
}

// ---------------------------------------------------------------
// Ahora, la parte del sorteo

function sortearAmigo() {
  const elementoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
  alert (elementoAleatorio)
}