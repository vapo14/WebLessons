function submitForm(event) {
  // preventDefault() previene el comportamiento por defecto de un formulario
  // el cual es refrescar la pagina.
  event.preventDefault();
  console.log(event.target.form[0].value);
}
