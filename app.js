let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }
  amigos.push(nombre);
  const li = document.createElement('li');
  li.textContent = nombre;
  document.getElementById('listaAmigos').appendChild(li);
  input.value = '';
  input.focus();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos en la lista para sortear.');
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `¡El amigo secreto es: ${amigoSeleccionado}!`;
  resultado.appendChild(li);
}