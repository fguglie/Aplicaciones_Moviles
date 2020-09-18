# API WhoIsIP
Es una API diseñada para obtener los datos de geolocalización de una IP específica.

#### Página principal:
https://ipwhois.io/

#### Uso:
Solamente hay que enviarle por método GET una petición HTTP apuntando hacia la url http://ipwhois.app/json/{IP}, insertando la IP a la cual se desea averiguar en la url especificada.

#### Respuesta:
La API devolverá en formato JSON un listado de parámetros con los distintos datos de la IP ingresada. 

A continuación se muestra un ejemplo de respuesta:
{
  "ip": "8.8.4.4",
  "success": true,
  "type": "IPv4",
  "continent": "North America",
  "continent_code": "NA",
  "country": "United States",
  "country_code": "US",
  "country_flag": "https://cdn.ipwhois.io/flags/us.svg",
  "country_capital": "Washington",
  "country_phone": "+1",
  "country_neighbours": "CA,MX,CU",
  "region": "New Jersey",
  "city": "Newark",
  "latitude": 40.735657,
  "longitude": -74.1723667,
  "asn": "AS15169",
  "org": "Google LLC",
  "isp": "Google LLC",
  "timezone": "America/New_York",
  "timezone_name": "Eastern Standard Time",
  "timezone_dstOffset": 0,
  "timezone_gmtOffset": -18000,
  "timezone_gmt": "GMT -5:00",
  "currency": "US Dollar",
  "currency_code": "USD",
  "currency_symbol": "$",
  "currency_rates": 1,
  "currency_plural": "US dollars",
  "completed_requests": 0
}

#### Documentación:
Para mas información, se puede leer la documentación en el siguiente enlace:
https://ipwhois.io/documentation