const propiedades = [
  {
    id: 1,
    nombre: "Casa en Medellín",
    ubicacion: "Laureles, Medellín",
    precio: "$350.000.000",
    imagen: "img/casa1.jpg"
  },
  {
    id: 2,
    nombre: "Apartamento en monteria",
    ubicacion: "Chapinero, Bogotá",
    precio: "$420.000.000",
    imagen: "img/apto1.jpg"
  },
  {
    id: 3,
    nombre: "Finca en el Quindío",
    ubicacion: "Armenia, Quindío",
    precio: "$780.000.000",
    imagen: "img/finca1.jpg"
  }
];

const contenedor = document.getElementById("listado-propiedades");

propiedades.forEach(p => {
  const div = document.createElement("div");
  div.className = "col-md-4 mb-4";
  div.innerHTML = `
    <div class="card h-100">
      <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
      <div class="card-body">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">${p.ubicacion}</p>
        <p class="card-text fw-bold text-success">${p.precio}</p>
      </div>
    </div>
  `;
  contenedor.appendChild(div);
});
