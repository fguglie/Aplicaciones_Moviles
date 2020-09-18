const https = require("https");


function obtenerOrigenIP(ip, callback){
	
var url = "https://ipwhois.app/json/"+ip;

    https.get(url, (resp) => {

        let data = "";

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            callback(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });;

   
}

module.exports = obtenerOrigenIP;
