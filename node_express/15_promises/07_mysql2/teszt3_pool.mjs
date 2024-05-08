//promise + connection pool használata

import mysql from "mysql2/promise";

let pool = null;
try {
    pool =  mysql.createPool({
    host: "localhost",
    user: "books",
    database: "books",
    password: "1234books1234",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, 
    idleTimeout: 60000, 
    queueLimit: 0
  });

  const [rows, fields] = await pool.execute("SELECT * FROM books LIMIT ? , ?", [ '2', '2', ]);
  console.log(rows[0].isbn);


} catch (err) {
  console.error(err.message);
}finally{
  await pool.end();
}
