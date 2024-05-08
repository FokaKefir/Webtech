//hibakezelés használata

import mysql from "mysql2/promise";

try {
  const conn = await mysql.createConnection({
    host: "localhost",
    user: "books",
    database: "books",
    password: "1234books1234",
  });

  const [rows, fields] = await conn.execute("SELECT * FROM books LIMIT ? , ?", [
    "2",
    "2",
  ]);
  console.log(rows);

  await conn.end();

} catch (err) {
  console.error(err.message);
}
//ha egyebet is ki akarunk írni a hibáról, az alábbi opciónk vannak:

/*
Most errors created by this module are instances of the JavaScript Error object. Additionally they typically come with two extra properties:

err.code: String, contains the MySQL server error symbol if the error is a MySQL server error (e.g. 'ER_ACCESS_DENIED_ERROR'), a Node.js error code if it is a Node.js error (e.g. 'ECONNREFUSED'), or an internal error code (e.g. 'PROTOCOL_CONNECTION_LOST').
err.errno: Number, contains the MySQL server error number. Only populated from MySQL server error.
err.fatal: Boolean, indicating if this error is terminal to the connection object. If the error is not from a MySQL protocol operation, this property will not be defined.
err.sql: String, contains the full SQL of the failed query. This can be useful when using a higher level interface like an ORM that is generating the queries.
err.sqlState: String, contains the five-character SQLSTATE value. Only populated from MySQL server error.
err.sqlMessage: String, contains the message string that provides a textual description of the error. Only populated from MySQL server error.

Fatal errors are propagated to all pending callbacks.

*/