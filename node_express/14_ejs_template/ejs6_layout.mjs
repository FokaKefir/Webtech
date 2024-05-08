// layout használata
//dokumentáció itt https://www.npmjs.com/package/express-ejs-layouts


import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import expressLayouts from 'express-ejs-layouts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

//default: a views könyvtár alatt keresi a layout fájlokat
//    alapértelmezett layout a layout.ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
//a layout fájlok a views/layouts alatt lesznek, default: layout.ejs
app.set('layout', 'layouts/layout');

// a /css cím alatt lehetnek css fájlok
app.use('/css', express.static(join(__dirname, 'css')))

//adatok a menühöz, ez egy partials-ban van
const menu = {
  Első : 'http://localhost:3000/',
  Második : 'http://localhost:3000',
  Harmadik : 'http://localhost:3000',
  Negyedik : 'http://localhost:3000',
  Ötödik : 'http://localhost:3000'
};
app.use("/", (req, res) => {
  res.render('page', {cim: "EJS sablonok", tartalom: "EJS layout példa", menu: menu});
});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("szerver fut a 3000-esen");
});