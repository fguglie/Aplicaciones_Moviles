
const obtenerPokemon = require("./library");

// Codigo funcion callback

function callback(data){
	//Nombre del pokemón:
	console.log("Nombre del pokemón:",data.forms[0].name);
	
	//Movimientos:
	var movimientos = data.moves;
    movimientos.forEach((element,i) => console.log("Movimiento",i,"_",element.move.name));
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

try{
	obtenerPokemon("magikarp",callback );
}catch(e){
	console.log("Error encontrado!: ",e);
}
