//minimális express alkalmazás

import express from 'express';

//express web alkalmazás létrehozása
const app = express();

//melyik porton fog futni
//a host localhost lesz
const port = '3000';

//a / relatív URL-re akkor válaszol ha GET kérést kap
app.get('/', (req, res) => {
  console.log(`request method ${req.method}, request url: ${req.url}`);
  res.send('Helló!'); //itt mehet egy teljes HTML oldal
});

app.get('/elso', (req, res) => {
  res.send("Első");
});

app.get('/masodik', (req, res) => {
  res.send("Második");
});

//csak azokra az útvonalakra válaszol 200-as HTTP válasszal amelyeket 
//megadunk az app. get, post, put, delete metódusaival 

app.listen(port,() => {
  console.log(`express fut a ${port}-es port-on`);
});
