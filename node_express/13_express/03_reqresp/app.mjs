//minimális express alkalmazás a labor feladatok megoldásához

import express from 'express';
import morgan from 'morgan';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//express web alkalmazás létrehozása
const app = express();

//naplózó middleware
app.use(morgan("dev")); //más mód: "tiny",  

//statikus fájlokat tartalmazó könyvtárat kiszolgáló middleware
// Az alábbi két URL kiszolgálja a public-ban levő fájlokat
app.use('/static', express.static(join(__dirname, 'static')))

//amennyiben az űrlap az x-www-urlencoded alapértelmezett kódolással küld
//ez a middleware függvény kipakolja a form változókat a req.body tulajdonságba
app.use(express.urlencoded({ extended: false }));

//middleware az űrlap feladathoz:
// meghívás: http://localhost:3000/static/form.html
app.post('/form', (req, res) => {
  //itt megoldani a form változók kiírását
  console.log("body: %O",req.body)
  res.end('OK');
});

//a / relatív URL-re akkor válaszol ha GET kérést kap

app.get('/elso', (req, res) => {
  console.log({
    url: req.url,
    method: req.method,
    ip: req.ip,
    hostname: req.hostname,
    path: req.path
  })
  console.log(req.query)
  res.send("Első");
});

app.get('/masodik', (req, res) => {
  res.send("Második");
});

app.get('/', (req, res) => {
  console.log(`request method ${req.method}, request url: ${req.url}`);
  res.send('Helló!'); 
});

//csak azokra az útvonalakra válaszol 200-as HTTP válasszal amelyeket 
//megadunk az app. get, post, put, delete metódusaival 

app.listen(3000,() => {
  console.log(`express fut a 3000-es port-on`);
});
