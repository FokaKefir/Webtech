//különböző HTML szerkezetek megvalósítása a sablonkezelőben

import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import konyvek from './konyvek.mjs';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", join(__dirname,'views'));
app.set("view engine", "ejs");


//if szerkezet a sablonban
// ha /if - el hívom az if.ejs első szövege jelenik meg
// ha /if?szoveg=1 - el vagy bármi mással hívom ugyancsak az első szöveg jelenik meg
// ha /if?szoveg=2 akkor a második
app.use("/if", (req, res) => {
  const melyik = req.query.szoveg ?? 1;
  res.render('if',{cim: "Ejs if szerkezet", melyik: melyik});
});

//for szerkezet: írjunk ki egy menüt lista elemekkel
const menu = {
  Első : 'http://localhost:3000/if?szoveg=1',
  Második : 'http://localhost:3000/if?szoveg=2',
  Harmadik : 'http://localhost:3000/if?szoveg=3'
};
app.use('/menu', (req, res) => {
  res.render('menu', {cim: "Menü", menu: menu});
});

//táblázat: írjuk ki az url paramétereiben kapott könyvlistát
//például /books/10/20
//az első könyvnek 1.-es web paraméter felel meg, ez a konyvek tömbben a 0 indexű
app.use("/books/:from/:to", (req, res) => {
  const szam = /^\d{1,3}$/;
  const from = +req.params.from; // +: átalakítjuk számmá 
  const to = +req.params.to;
  // nem lehet 0, kis egész számok, és van ilyen indexű könyv 
  if (from==0 || to==0 || !szam.test(from) || !szam.test(to) || !konyvek[from-1] || !konyvek[to-1]){
    res.render('hiba', {hiba: "Rossz paraméterek"});
  }else{
    const lista = konyvek.slice(from-1, to);
    res.render('table', {cim: "Ejs táblázat", lista: lista});
  }
});

//egy könyv részletes adatai
app.use('/book/:isbn', (req, res)=> {
  const isbn = req.params.isbn;
  const isbnRe = /^\d{13}$/;
  if (!isbnRe.test(isbn)){
    res.render('hiba', {hiba: "Rossz ISBN szám"});
  }else{
    const book = konyvek.find((book)=> book.isbn === isbn);
    if (book === undefined){
      res.render('hiba', {hiba: "Nincs ilyen ISBN számú könyv"});
    }else{
      // res.render('book', {book: book}); 
      res.render('book', {book}); // rövid szintaxis
    }
  }
});

app.get('/table/:N/:M', (req, res) => {
  const N = parseInt(req.params.N);
  const M = parseInt(req.params.M);
  const numbersNeeded = N * M;
  try {
    const data = readFileSync('./adatok/szamok.txt', {encoding: 'utf-8'});

    const numbers = data.split(/\s+/).map(Number);
    if (numbers.length < numbersNeeded) {
      res.send("Tul nagy a tablazat");
    } else {
      const tableData = [];
      for (let i = 0; i < N; i++) {
        const row = numbers.slice(i * M, (i + 1) * M);
        tableData.push(row);
      }
      res.render('table1', {rows: tableData});
    }

  } catch (err) {
    console.error("File read error: ", err);
    res.status(500).send("Hiba a file beolvasasa kozben");
  }
})

//ha az előző címeket nem hívtuk meg ez fut le
app.use("/", (req, res) => {
  res.render('para', {cim: "EJS sablonok", tartalom: "Különböző szerkezetek használata sablonokban"});
});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("szerver fut a 3000-esen");
});