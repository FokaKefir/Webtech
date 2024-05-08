import express from 'express';
import http from 'http';
import { join } from 'path';
import expressLayouts from 'express-ejs-layouts';
import httpStatus from 'http-status-codes';
import morgan from 'morgan';
import { __dirname } from './dirname.mjs';

const app = express();

app.use(morgan("dev")); 

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

import { router as indexRouter } from './routes/index.mjs';
import { router as yesRouter }  from './routes/yes.mjs'; 

//post adatok átvevése
app.use(express.urlencoded({ extended: false }));

// a /css cím alatt lesznek css fájlok
app.use('/css', express.static(join(__dirname, 'assets/css')))
//itt pedig a .js fájlok
app.use('/js', express.static(join(__dirname, 'assets/js')))

// útvonalválasztók
app.use('/', indexRouter);
app.use('/yes', yesRouter);

//hibakezelés
app.use((req, res)=>{
  const err = httpStatus.NOT_FOUND;
  console.log(`Rossz webcím: ${req.path}`);
  const error = httpStatus.NOT_FOUND; //404
  res.status(error).send(`${error} Rossz webcím`);
});

app.use((err, req, res, next)=>{
  console.error(err.message); //rövid üzenet, pontosan a hiba
  // console.error(err.stack); 
  const error = httpStatus.INTERNAL_SERVER_ERROR; // 500
  res.status(error).send(`${error} Hibába futott az alkalmazás.`); 
});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("szerver fut a 3000-esen");
});