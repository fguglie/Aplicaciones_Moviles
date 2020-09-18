
const obtenerOrigenIP = require("./library");

obtenerOrigenIP("190.192.142.146",(res)=>{
	console.log("Tu Ip actual es:",res.ip,"y está localizada en",res.country,", ",res.region,",",res.city);
});
