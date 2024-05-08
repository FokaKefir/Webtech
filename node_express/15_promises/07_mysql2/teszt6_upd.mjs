//UPDATE lekérdezés használata
//valamint a lekérdezési tervek cache-ben való tárolása
//több egymás utáni ugyanolyan Query esetén a prepare csak egyszer fut le
//changedRows
import mysql from "mysql2/promise";

let conn = null;

try {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "books",
    database: "books",
    password: "1234books1234",
  });

  conn.config.namedPlaceholders = true;

  const ISBN = "9789731970806";

  let results = null; 
  let fields = null;

  for (let i = 0; i < 3; i++) {
    const newPrice = (Math.random() * 100).toFixed(2); //xx.yy

    [ results, fields ] = await conn.execute(
      "UPDATE books SET price = :price WHERE isbn = :isbn",
      { isbn: ISBN, price: newPrice }
    );
    console.log(`UPDATE Módosult : ${results.changedRows} sor `);

    //teszt
    [ results, fields ] = await conn.execute("SELECT price FROM books WHERE isbn = :isbn", {
      isbn: ISBN,
    });

    console.log(`SELECT ár: ${newPrice} ár: ${results[0].price}`);
  }
} catch (err) {
  console.error(err.message);
} finally {
  await conn.end();
}

/* A szkript MySQL naplója: a 3 ciklusban PREPARE csak egyszer fut le egy-egy lekérdezéshez
 Connect	pdo@localhost on pdo using TCP/IP
 Prepare	UPDATE books SET price = ? WHERE isbn = ?
 Execute	UPDATE books SET price = '3.66' WHERE isbn = '9789731970806'
 Prepare	SELECT price FROM books WHERE isbn = ?
 Execute	SELECT price FROM books WHERE isbn = '9789731970806'
 Execute	UPDATE books SET price = '14.42' WHERE isbn = '9789731970806'
 Execute	SELECT price FROM books WHERE isbn = '9789731970806'
 Execute	UPDATE books SET price = '93.02' WHERE isbn = '9789731970806'
 Execute	SELECT price FROM books WHERE isbn = '9789731970806'
 Quit
*/