
const obtenerChiste = require("./library");

// Codigo funcion callback

// // Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then((url)=>{
		console.log(url);
	}).catch((e)=>{
		console.log("Error: "+ e);
	});

// console.log(obtenerChiste());
