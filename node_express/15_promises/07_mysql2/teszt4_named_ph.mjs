//nevek használata lekérdezési tervben

import mysql from "mysql2/promise";

let conn = null;

try {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "books",
    database: "books",
    password: "1234books1234",
  });

  //ezzel a beállítással használhatóak a nevek
  //"named placeholders"
  conn.config.namedPlaceholders = true;

  const [rows, fields] = await conn.execute(
    "SELECT * FROM books WHERE pages > :pages and price < :price",
    { pages: 128, price: 10 }
  );

  for (const row of rows) {
    console.log(row.title);
  }

} catch (err) {
  console.error(err.message);
}finally {
  await conn.end();
}
