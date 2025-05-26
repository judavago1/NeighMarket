function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.add("oculto"));
  document.getElementById(id).classList.remove("oculto");
}

function verProductos(tiendaId) {
  const tiendas = document.querySelectorAll('.tienda');
  tiendas.forEach(t => t.style.display = 'none');

  const productos = document.getElementById('productos-' + tiendaId);
  if (productos) {
    productos.style.display = 'block';
  }
}

function volverAtras() {
  const tiendas = document.querySelectorAll('.tienda');
  tiendas.forEach(t => t.style.display = 'block');

  const productos = document.querySelectorAll('.productos');
  productos.forEach(p => p.style.display = 'none');
}

window.mostrarSeccion = mostrarSeccion;
window.verProductos = verProductos;
window.volverAtras = volverAtras;

document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion('inicio');
});
