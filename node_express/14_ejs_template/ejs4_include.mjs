import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get('/select', (req, res) => {
  res.render('select', { method: req.method, selected: null });
});

app.post('/select', (req, res) => {
  const selected = req.body.fruit;
  res.render('select', { method: req.method, selected });
});

app.use("/", (req, res) => {
  res.render('para', { cim: "EJS sablonok", tartalom: "EJS include szerkezet példa, webcím: http://localhost:3000/select" });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("szerver fut a 3000-esen");
});
