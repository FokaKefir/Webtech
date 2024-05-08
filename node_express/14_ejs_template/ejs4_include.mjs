//include szerkezet használata 
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", join(__dirname,'views'));
app.set("view engine", "ejs");

//amennyiben az űrlap az x-www-urlencoded alapértelmezett kódolással küld
//ez a middlware függvény kipakolja a form változókat a req.body tulajdonságba
app.use(express.urlencoded({ extended: false }));

//példa egyszerű include-ra, lásd form.ejs
app.use('/form', (req, res) => {
  res.render('form', {method: req.method, body: req.body});
});

app.use("/", (req, res) => {
  res.render('para', {cim: "EJS sablonok", tartalom: "EJS include szerkezet példa, webcím: http://localhost:3000/form"});
});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("szerver fut a 3000-esen");
});