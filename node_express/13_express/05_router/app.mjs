//Router objektum példa

import express from 'express';
import morgan from 'morgan';

const port = '3000';

//express web alkalamzás létrehozása
const app = express();

app.use(morgan("dev")); 

//a Router létrehozás
const router = express.Router();

//minden kérés amit a router kezel átfut ezen a middleware-en
//a Router objektumokhoz pont úgy lehet middleware függvényeket hozzáadni
//mint az Express-hez
router.use((req, res, next)=>{
  req.body='Alma';
  next(); //tovább a következő middleware-re
});

//csak ha '/elso'-vel kezdődik a cím akkor fut a Router
app.use('/elso', router);

app.use ((req, res)=>{
  res.writeHead(200,{'Content-type': 'text/plain'});
  res.end(req.body);
});

app.listen(port,() => {
  console.log('listening');
});

app.on('error', error => { throw error; });