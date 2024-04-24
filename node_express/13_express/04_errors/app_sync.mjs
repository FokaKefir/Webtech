//hibakezelés express web alkalmazásban

import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import sanitize from 'sanitize-filename';
//a HTTP státus kódokat névvel tartalmazó modul
import httpStatus from 'http-status-codes';

const app = express();
app.use(morgan("tiny")); //formátumok itt: https://www.npmjs.com/package/morgan 

//visszaküldi egy szöveges fájl tartalmát a static könyvtárból
//ha nincs olyan fájl amit kér a kérés hibát ad
app.get('/getfile/:name', (req, res, next)=>{
  //megtisztítjuk a nevet minden veszélyes karaktertől
  //lásd: https://www.npmjs.com/package/sanitize-filename
  const fileName = sanitize(req.params.name); 

  //csak szöveges fájlok vannak a static könyvtárban
  //ezért olvashatunk utf-8 opcióval
  try {
      let data = fs.readFileSync (join(__dirname,'static', fileName),'utf-8'); 
      //sikeres fájl olvasás, kiküldjük:
      //a tartalom típusát
      res.set('Content-Type', 'text/plain;charset=utf-8');
      //a tartalom hosszát
      res.set('Content-Length', data.length);
      //tartalmat
      res.send(data); 
  }catch(err){
    next(err);
  }
});

app.get('/', (req, res, next) => {
  res.send('Szöveges fájl letöltéshez: /getfile/filename.txt. Az a.txt-t és b.txt-t lehet letölteni, minden más névre hiba.'); 
});

//ha ide ér, egyetlen előző middleware sem fogta ki a kérést, tehát hiba
//amelyik jelzi, hogy nincs ilyen útvonal
app.use((req, res)=>{
  const err = httpStatus.NOT_FOUND;
  console.log(`Rossz webcím: ${req.path}`);
  const error = httpStatus.NOT_FOUND; //404
  res.status(error).send(`${error} Rossz webcím`);
});

//a saját hibakezelő függvényeknek 4 paramétere van, az első a hiba objektum
//a függvény az utolsó kell legyen a middleware láncban
app.use((err, req, res, next)=>{
  console.error(err.message); //rövid üzenet, pontosan a hiba
  // console.error(err.stack); // stack állapota a fejlesztő számára, hol történt pontosan a hiba

  const error = httpStatus.INTERNAL_SERVER_ERROR; // 500
  res.status(error).send(`${error} Hibába futott az alkalmazás.`); 
});

app.listen(3000,() => {
  console.log(`express fut a 3000-es port-on`);
});
