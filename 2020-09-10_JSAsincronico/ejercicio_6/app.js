
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake()
.then(data =>{
    var persona = data.results[0];
    console.log("Nombre:",persona.name.first,persona.name.last);
    console.log("Genero:",(persona.gender=="female")?"Mujer":"Hombre");
    console.log("Estado:",persona.location.state);
    console.log("Ciudad:",persona.location.city);
    console.log("Calle:",persona.location.street.name);
    console.log("Nro:",persona.location.street.number);
    console.log("Código Postal:",persona.location.postcode);
    console.log("Email:",persona.email);
    console.log("Nombre de usuario:",persona.login.username);
    console.log("Password:",persona.login.password);
}).catch(e=>{
    console.log("Error: ",e);
});