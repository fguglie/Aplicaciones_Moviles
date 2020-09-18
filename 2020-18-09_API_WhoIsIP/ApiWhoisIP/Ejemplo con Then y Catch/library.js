const rp = require("request-promise");

async function ipwhois(ip){
	var options ={
		uri:"http://ipwhois.app/json/"+ip,
		json:true
	}
	return await rp(options);
}

module.exports = ipwhois;
