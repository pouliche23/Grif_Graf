
function incrementerNombre(button) {
  var gridItem = button.parentElement;
  var nombreSpan = gridItem.querySelector(".nombre");
  var nombre = parseInt(nombreSpan.textContent);
  nombre++;
  nombreSpan.textContent = nombre;
}

function decrementerNombre(button) {
  var gridItem = button.parentElement;
  var nombreSpan = gridItem.querySelector(".nombre");
  var nombre = parseInt(nombreSpan.textContent);
  nombre--;
  nombreSpan.textContent = nombre;
}

