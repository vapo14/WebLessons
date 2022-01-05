//console.log("Hello World!");

// javascript puede acceder a cualquier
// elemento en el DOM

// getElementsByClassName regresa una lista (arreglo)
// de elementos HTML que tengan la clase "icon".
let icon = document.getElementsByClassName("icon")[0];

//console.log(icon);

// todo en javascript es una clase
// el objeto es la manifestacion de la clase

class Animal {
  // el constructor se ejecuta cuando creas el objeto
  constructor(tipo, tamano, sexo, peso) {
    // 'this' se refiere al objeto que se esta creando
    this.tipo = tipo;
    this.tamano = tamano;
    this.sexo = sexo;
    this.peso = peso;
  }
}

let perro = new Animal("perro", "1mt", "M", "50kg");

//console.log(perro.peso);

// EJEMPLO VIDA REAL

class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login(username, password) {
    if (username === this.username) {
      if (password === this.password) {
        console.log("Welcome!");
        return;
      }
    }
    console.log("Wrong credentials!");
  }
}

let user1 = new Usuario("vapo14", "12345");

user1.login("vapo14", "12345");
