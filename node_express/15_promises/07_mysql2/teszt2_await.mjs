//await használata modulban

import mysql from "mysql2/promise";

let conn = null;

try {
  conn = await mysql.createConnection({
      host: "localhost",
      user: "books",
      database: "books",
      password: "1234books1234",
  });

  const [rows, fields] = await conn.execute("SELECT * FROM books LIMIT ? , ?", [
    "2", "2",
  ]);
  console.log(rows);

} catch (err) {
  console.error(err.message);
}finally{
  await conn.end();
}
