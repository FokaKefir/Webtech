//include szerkezet és partials könyvtár használata 

import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", join(__dirname,'views'));
app.set("view engine", "ejs");

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
  res.render('index', {cim: "EJS sablonok", tartalom: "EJS partials példa", menu: menu});
});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("szerver fut a 3000-esen");
});