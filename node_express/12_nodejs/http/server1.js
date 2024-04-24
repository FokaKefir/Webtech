// #!/usr/bin/env node

import { createServer } from 'http';
// vagy:
// import * as http from 'http';

const server = createServer((req, res) => {

  //sztring adatokat várunk a body részben
  //ez általánosan nem igaz, de kezdetnek megfelel
  //(bináris adatokat Buffer típusban kell fogadni)
  let body = '';

  req.on('data', chunk => { //ha nagyobb a body, több töredék  jön
    body=body.concat(chunk.toString('utf8'));
  });
  
  req.on('error', err => console.error(err));
  
  req.on('end', () => {
    console.log("req end:");
    console.log(`HTTP method: ${req.method}`); //HTTP metódus
    console.log(`url: ${req.url}`); //webcím 
    console.log('Fejlécek:');
    console.log(req.headers); //fejlécek (ez egy objektum)
    console.log('Data:');
    console.log(body); //body
    body='';

    //200-as kód: rendben lefutott
    //A Content-type-al jelzem milyen MIME típust küldök vissza
    res.writeHead(200, {'Content-type': 'text/plain'}); 
    res.end('OK');
  });  

});

server.listen (3000, () => {
  console.log('szerver fut, port:'+3000)
});