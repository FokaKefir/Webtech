//sablonkezelő használata Express-ben 

import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", join(__dirname,'views'));
app.set("view engine", "ejs");

app.get('/:fruit1/:fruit2/:fruit3', (req, res) => {
  const {fruit1, fruit2, fruit3} = req.params;
  const fruits = [fruit1, fruit2, fruit3];
  const baseOrder = ['alma', 'szilva', 'cseresznye'];
  const order = fruits.map(fruit => baseOrder.indexOf(fruit) + 1).join('/');
  res.render('para', {
    cim: "Fruit order",
    tartalom: fruits,
    sorrend: order
  })
})

app.use("/", (req, res) => {
  res.render('para', {cim: "Oldal címe", tartalom: ['alma', 'kecske', 'szia hello']});
  
});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("szerver fut a 3000-esen");
});