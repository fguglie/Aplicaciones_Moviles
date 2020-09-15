
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("asd").then((data)=>{
  console.log("Nombre del pokemón:",data.forms[0].name);  
	var movimientos = data.moves;
    movimientos.forEach((element,i) => console.log("Movimiento",i,"_",element.move.name));
}).catch((e)=>{
    console.log("Error encontrado: ",e.error);
})