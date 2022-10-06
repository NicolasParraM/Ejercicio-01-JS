// Ejercicio 01 - JS

const nikolai = {
    Nombre: "Nicolas Parra",
    Edad: "20 años",
    esDesarrollador: true,
    fecha_nacimiento: new Date("november 29 2001"),
    Libro_favorito: {
        titulo: "Ready Player One",
        autor: "Ernest Cline",
        fecha: new Date("August 16 2011"),
        url: "https://es.wikipedia.org/wiki/Ready_Player_One"
    }
}

const lista = [nikolai.Nombre, 
    nikolai.Edad, 
    nikolai.esDesarrollador, 
    nikolai.fecha_nacimiento, 
    nikolai.Libro_favorito];

console.log(lista);