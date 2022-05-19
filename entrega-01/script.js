
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido
        this.libros = libros,
        this.mascotas = mascotas;
    }
    getFullName(){
      return this.nombre + " " + this.apellido
    }
}
const usuario1 = new Usuario("Cristian", "Pomodo", [{
    nombre: "Entevista con el vampiro",
    autor: "Ann Rice",
}, {
    nombre: "Harry Potter",
    autor: "J. K. Rowling",
}], ("Murdock, Bizquit"));

usuario1.getFullName()