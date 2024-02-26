let boton = document.getElementById("traer-posts");
let postContainer = document.getElementById("post-data");

// Evento al hacer clic en el botón
boton.addEventListener("click", function () {
  getPosts();
});

// Función para obtener los posts desde la API
async function getPosts() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    let datos = await respuesta.json();

    // Llamar a la función para mostrar los posts en el HTML
    mostrarPosts(datos);
  } catch (error) {
    console.log(error);
  }
}

// Función para mostrar los posts en el HTML
function mostrarPosts(posts) {
  // Limpiar el contenedor antes de mostrar los nuevos posts
  postContainer.innerHTML = "";

  // Crear una lista desordenada (ul)
  let lista = document.createElement("ul");

  // Iterar sobre los posts y crear elementos de lista (li)
  posts.forEach(function (post) {
    let listItem = document.createElement("li");

    // Crear un elemento de título (h3) para el post
    let tituloElemento = document.createElement("h6");
    tituloElemento.textContent = post.title;
    tituloElemento.style.fontWeight = "bold";
    listItem.append(tituloElemento);

    // Crear un elemento de cuerpo (p) para el post
    let cuerpoElemento = document.createElement("p");
    cuerpoElemento.textContent = post.body;
    listItem.append(cuerpoElemento);

    // Agregar el listItem a la lista
    lista.append(listItem);
  });

  // Agregar la lista al contenedor
  postContainer.append(lista);
}
