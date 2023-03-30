const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Se obtiene la referencia al elemento HTML que contendrá la lista de productos.
const li = document.getElementById("lista-de-productos");

// Se obtiene la referencia al elemento HTML que representa el campo de entrada de texto.
const $i = document.querySelector('.input');
console.log($i);

// Se crea un bucle que recorre el array de productos y para cada uno de ellos se crea un elemento div que contiene una imagen y un título.
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;

  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
}

// Se obtiene la referencia al botón que activa el filtro de productos.
const botonDeFiltro = document.querySelector("button");

// Se define el evento que se activará al hacer clic en el botón de filtro.
botonDeFiltro.onclick = function () {
  // Se eliminan todos los elementos de la lista de productos.
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  // Se obtiene el texto ingresado en el campo de entrada de texto.
  const texto = $i.value;
  console.log(texto);

  // Se filtran los productos que contienen el texto ingresado en el campo de entrada de texto.
  const productosFiltrados = filtrado(productos, texto);

  // Se crea un bucle que recorre el array de productos filtrados y para cada uno de ellos se crea un elemento div que contiene una imagen y un título.
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

// Se define una función que filtra los productos por tipo o por color.
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}


