
const obtenerChiste = require("./library");

// Codigo funcion callback

function imprimir(url) {
    console.log(url);
    
}

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then((url)=>{
		console.log(url);
		console.log("Chistazo!")
	}).catch((e)=>{
		console.log("Error: "+ e);
	})