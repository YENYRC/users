// Función para obtener usuarios de la API
async function obtenerUsuarios() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const usuarios = await response.json();
mostrarUsuarios(usuarios);
} catch (error) {
console.error('Error al obtener usuarios:', error);
}
}

// Función para generar una edad aleatoria entre 18 y 60
function generarEdadAleatoria() {
return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
}

// Función para mostrar los usuarios en la lista
function mostrarUsuarios(usuarios) {
const lista = document.getElementById('listaUsuarios');

usuarios.forEach(usuario => {
// Generar edad aleatoria
const edad = generarEdadAleatoria();

// Crear elemento de lista
const li = document.createElement('li');

// Añadir imagen (usamos https://thispersondoesnotexist.com/ como alternativa)
const img = document.createElement('img');
img.src = `https://thispersondoesnotexist.com/image`; // Genera una imagen aleatoria
img.alt = `Imagen de ${usuario.name}`;
img.src = `assets/img/img${usuario.id % 10 + 1}.jpg`; // Usa 10 imágenes cíclicamente


// Crear div para los detalles
const div = document.createElement('div');
div.innerHTML = `
<strong>Nombre:</strong> ${usuario.name} <br>
<strong>Edad:</strong> ${edad} <br>
<strong>Usuario:</strong> ${usuario.username} <br>
<strong>Teléfono:</strong> ${usuario.phone} <br>
<strong>Email:</strong> ${usuario.email} <br>
<strong>Compañía:</strong> ${usuario.company.name} <br>
<strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}
`;

// Añadir la imagen y los detalles al elemento de lista
li.appendChild(img);
li.appendChild(div);

// Añadir el elemento a la lista
lista.appendChild(li);
});
}

// Ejecutar la función al cargar la página
obtenerUsuarios();






















