/*Crear una interface en TypeScript a partir de este código JavaScript:
var spiderman = {
nombre: "Peter parket",
poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};*/

interface Superheroes{
    nombre:string;
    poderes:Array<String>;
}

let Spiderman:Superheroes = {
    nombre : "Peter Parket",
    poderes : ["trepar","fuerza", "agilidad", "telas de araña"]
}