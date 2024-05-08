//saját magunk által felépített un. "raw" lekérdezés
//Promise-al
//az SQL feltörése miatt nem ajánlott soha ezt használni

import mysql from "mysql2/promise";

let conn = null;

try {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "books",
    database: "books",
    password: "1234books1234",
  });

  //legyenek ezek kívülről jövő adatok, pl. webcímen beküldött paraméterek
  let pages = 128;
  let price = 10.

  //itt ellenőrizni kell őket
  //ellenőrző modul vagy saját ellenőrzés, regex, stb.

  //ha minden rendben, levédni az SQL-ben használt nyelvi karaktereket
  //pl. ' helyett \'
  pages = conn.escape(pages);
  price = conn.escape(price);

  const [rows, fields] = await conn.query(
    `SELECT * FROM books WHERE pages > ${pages} and price < ${price}`
  );

  //a rows egy tömb az eredménnyel, 
  //egy tömb elem objektum az eredmény mezőkkel, pl. rows[0] ilyen:
  // {
  //   author: 'Vorzsák Magdolna - Kovács Liciniu Alexandru',
  //   id: 22,
  //   isbn: '9789738542235',
  //   pages: 152,
  //   price: 8,
  //   pub_date: Tue Jan 01 2002 00:00:00 GMT+0200 (Eastern European Standard Time),
  //   pub_name: 'Scientia Kiadó, Kolozsvár',
  //   title: 'Mikroökonómiai kislexikon'
  // }

  for (const row of rows) {
    console.log(row.title);
  }

} catch (err) {
  console.error(err.message);
}finally {
  await conn.end();
}
