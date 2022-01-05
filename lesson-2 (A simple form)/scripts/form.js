// esta funcion se ejecuta cuando le damos click al boton de send

function send(event) {
  event.preventDefault();
  // guardamos todo el form en una variable
  let form = event.target;

  // form es una lista de elementos de tamano 3, donde
  // el primero es el subject, el segundo es el message, y
  // el tercero es el boton de send.

  // obtenemos el asunto y lo guardamos en una variable
  let subject = form[0].value;
  // obtenemos el mensaje y lo guardamos en una variable
  let message = form[1].value;

  // buscamos en el DOM nuestro parrafo con ID "content" para
  // poner dentro de el los valores que nos mando el form.
  let content = document.getElementById("content");

  // asignamos el texto dentro del parrafo a los valores recibidos
  // del formulario. Ve el archivo index.html para mas info.
  content.innerText = "Asunto: " + subject + "\n" + "Mensaje: " + message;
}
