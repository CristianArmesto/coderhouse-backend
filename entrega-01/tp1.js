class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido
        this.libros = libros,
            this.mascotas = mascotas;
    }
}
let usuario1 = new Usuario("Cristian", "Pomodo", [{
    nombre: "Entevista con el vampiro",
    autor: "Ann Rice",
}, {
    nombre: "Hary Potter",
    autor: "J. K. Rowling"
}], ("Murdock, Bizquit"));


