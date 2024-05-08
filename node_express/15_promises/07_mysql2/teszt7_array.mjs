//a conn.execute (options) alak használata
//ha opciókat is akarunk megadni a visszatérített eredményre nézve,
//akkor a kérést egy opció tömbben kell megfogalmazni
//példák opciók ra:
//    rowsArray: true  //az eredményt 2 dimenziós tömbben adja vissza
//    values: {...}    //a lekérdezési terv paraméterei
//    timeout: 30000   //ha ennyi ms alatt nem futtatja le, hagyja abba 

import mysql from "mysql2/promise";

let conn = null;

try {
  conn = await mysql.createConnection({
    // host: "localhost",
    // user: "pdo",
    // database: "pdo",
    // password: "pdo1234pdo",

    host: "localhost",
    user: "books",
    database: "books",
    password: "1234books1234",
  });

  conn.config.namedPlaceholders = true;

  const options = {
    sql: "SELECT isbn, price FROM books limit :start, :count",
    rowsAsArray: true,
    values: { start: "0", count: "10" },
  };

  const [results, fields] = await conn.execute(options);

  console.log(results);
} catch (err) {
  console.error(err.message);
} finally {
  await conn.end();
}
