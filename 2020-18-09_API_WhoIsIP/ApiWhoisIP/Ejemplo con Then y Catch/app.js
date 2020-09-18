
const ipwhois = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

//console.log(ipwhois("190.192.142.146"));
// Codigo funcion callback

ipwhois("190.192.142.146").then(function imprimir(res){
	console.log("Tu Ip actual es:",res.ip,"y está localizada en",res.country,", ",res.region,",",res.city);
}).catch(function(err){
    console.log("problemas al ejecutar");
})


