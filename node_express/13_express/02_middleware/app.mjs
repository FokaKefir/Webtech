//minimális express alkalmazás

import express from 'express';
import morgan from 'morgan';

//az ES modulokban ez most a __dirname elérése
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//express web alkalamzás létrehozása
const app = express();

//melyik porton fog futni
//a host localhost lesz
const port = '3000';

//a morgan egy naplózást biztosító middleware
//a napló sorok tartalma konfigurálható
//https://expressjs.com/en/resources/middleware/morgan.html

//meg lesz hívva elsőnek a req és res objektumokkal
//az app futtatása közben láthatóak a napló sorok
//a dev sorok alakja:
// GET / 200 3.616 ms - 12
app.use(morgan("dev")); //formátumok itt: https://www.npmjs.com/package/morgan 

//statikus fájlokat tartalmazó könyvtárat kiszolgáló middleware
// Az alábbi két URL kiszolgálja a public-ban levő fájlokat
// http://localhost:3000/public/bagoly.jpg
// http://localhost:3000/public/html5.html 
app.use('/public', express.static(join(__dirname, 'public')))

//saját middleware, minden kérésre lefut
app.use((req, res, next) => {

  //feldolgozunk valamit és változhat a req és res
  req.body = 'Alma';

  next(); //ha befejeztük, meghívjuk a következő middleware-t
          //ha nem fejezzük be a kérést pl. res.send()-el, és nem hívjuk meg a 
          // next() függvényt akkor itt fennakad
});

//labor middleware-t ide írni

//a / relatív URL-re akkor válaszol ha GET kérést kap
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`Helló ${req.body}!`); //itt a megváltoztatott body-t kapjuk 
});

app.get('/elso', (req, res) => {
  // res.set('Content-Type', 'text/plain');
  res.send("Első " + req.body);
});

app.listen(port,() => {
  console.log(`express fut a ${port}-es port-on`);
});

app.on('error', error => { throw error; });