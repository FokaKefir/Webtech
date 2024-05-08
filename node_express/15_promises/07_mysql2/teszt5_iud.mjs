//DELETE és INSERT lekérdezések használata

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

  //DELETE eset:
  results = await conn.execute("DELETE FROM books WHERE isbn=:isbn", {
    isbn: ISBN,
  });
  //a törlés lefutásáról itt vannak információk
  console.log(`DELETE Törölve ${results[0].affectedRows} sor`);

  //INSERT eset
  [ results, fields ] = await conn.execute(
    "INSERT INTO books (isbn, title, author, pages, pub_name, price )" +
      "VALUES (:isbn, :title, :author, :pages, :pub_name, :price)",
    {
      isbn: ISBN,
      title: "Tejipari technológia",
      author: "Csapó János",
      pages: 432,
      pub_name: "Scientia Kiadó",
      pub_date: "2015.04.11",
      price: 70,
    }
  );
  //a beszúrás lefutásáról itt vannak információk:
  console.log(`INSERT Beszúrt sor id: ${results.insertId} `);
  console.log(`INSERT Módosult : ${results.affectedRows} sor `);

  //többször lefuttatott ugyanolyan UPDATE esetben a prepare() csak egyszer fut
  //1. query
  let newPrice = (Math.random() * 100).toFixed(2); //xx.yy

  [ results, fields ] = await conn.execute(
    "UPDATE books SET price = :price WHERE isbn = :isbn",
    { isbn: ISBN, price: newPrice }
  );
  console.log(`UPDATE Módosult : ${results.affectedRows} sor `);

  
  //2. query ugyanaz csak más price értékkel
  newPrice = (Math.random() * 100).toFixed(2); //xx.yy

  [ results, fields ] = await conn.execute(
    "UPDATE books SET price = :price WHERE isbn = :isbn",
    { isbn: ISBN, price: newPrice }
  );
  console.log(`UPDATE Módosult : ${results.affectedRows} sor `);


  //teszt
  [ results, fields ] = await conn.execute("SELECT price FROM books WHERE isbn = :isbn", {
    isbn: ISBN,
  });

  console.log(`SELECT ár: ${newPrice} ár: ${results[0].price}`);

} catch (err) {
  console.error(err.message);
} finally {
  await conn.end();
}
