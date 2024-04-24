#!/usr/bin/env node

import * as http from "http";

const server = http.createServer();
const host = "http://localhost:3000";

server.on("request", (req, res) => {

  const url = new URL(req.url, host);
  const urlPath = url.pathname;

  switch (urlPath) {
    case "/":
      home(req,res);
      break;
    case "/elso":
      elso(req,res);
      break;
    case "/masodik":
      masodik(req,res);
      break;
    default:
      hiba(req,res,"Nincs ilyen oldal");
  }
});

server.on("error", err => hiba(req, res, err) );

server.listen(3000, () => {
  console.log("szerver fut");
});

function home(req, res){
  res.writeHead(200,{'Content-type': 'text/html;charset=utf-8',
});
  res.end (
  `<!DOCTYPE html>
  <html><head></head>
  <body><p>Home</p></body>
  </html>`
  );
}

function elso(req, res){
  res.writeHead(200,{'Content-type': 'text/html;charset=utf-8'});
  res.end (
  `<!DOCTYPE html>
  <html><head></head>
  <body><p>Első</p></body>
  </html>`
  );
}

function masodik(req, res){
  res.writeHead(200,{'Content-type': 'text/html;charset=utf-8'});
  res.end (
  `<!DOCTYPE html>
  <html><head></head>
  <body><p>Második</p></body>
  </html>`
  );
}

function hiba(req,res,err){
  res.writeHead(401,{'Content-type': 'text/html;charset=utf-8'});
  // console.log(err);
  res.end (
  `<!DOCTYPE html>
  <html><head></head>
  <body><p style="color:red;">Hiba: nincs ilyen oldal</p></body>
  </html>`
  );
}