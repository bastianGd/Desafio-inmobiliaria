import propiedadesVenta from "./venta.js";
import propiedadesAlquiler from "./alquiler.js";

// Obtener elementos del DOM
const propVenta = document.getElementById("venta");
const propVentaFile = document.getElementById("venta-page");
const propAlquiler = document.getElementById("alquiler");
const propAlquilerFile = document.getElementById("alquiler-page");

// Función para mostrar propiedades
function mostrarPropiedad(tipoPropiedad, contenedor, limite = 0) {
  let tarjeta = "";

  if (limite) {
    for (let i = 0; i < limite; i++) {
      tarjeta += crearTarjeta(tipoPropiedad[i]);
    }
  } else {
    for (let i of tipoPropiedad) {
      tarjeta += crearTarjeta(i);
    }
  }
  contenedor.innerHTML = tarjeta;
}

// Función para crear tarjetas de propiedades
function crearTarjeta(propiedad) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.imagen}" class="card-img-top" alt="${propiedad.imagen}" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.tituloPropiedad}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banios} baños
          </p>
          <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
          ${
            propiedad.smoke
              ? `<p class='text-success'><i class='fas fa-smoking'></i> Se permiten fumadores</p>`
              : `<p class='text-danger'><i class='fas fa-smoking-ban'></i> No fumadores</p>`
          }
          ${
            propiedad.pets
              ? `<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>`
              : `<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>`
          }
        </div>
      </div>
    </div>
  `;
}

// Mostrar propiedades dependiendo de la disponibilidad de los elementos en el DOM
if (propVenta) {
  mostrarPropiedad(propiedadesVenta, propVenta, 3);
}

if (propAlquiler) {
  mostrarPropiedad(propiedadesAlquiler, propAlquiler, 3);
}

if (propVentaFile) {
  mostrarPropiedad(propiedadesVenta, propVentaFile);
}

if (propAlquilerFile) {
  mostrarPropiedad(propiedadesAlquiler, propAlquilerFile);
}
