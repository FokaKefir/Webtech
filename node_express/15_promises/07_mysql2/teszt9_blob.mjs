//blob írás adatbázisba

import mysql from "mysql2/promise"
import { readFile } from "fs/promises"
import { join } from "path"
import mime from "mime"

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

  const fileName = 'lago.jpg';
  const imageDir = 'data';
  const fullName = join(process.cwd(),imageDir,fileName);

  let results = null; let fields = null;

  const mimeType = mime.getType(fullName);

  let data = await readFile(fullName);

  [results, fields] = await conn.execute(
    "INSERT INTO image (filename, mimetype, data) VALUES ( :filename, :mimetype, :data )",
    {
      filename: fileName,
      mimetype: mimeType,
      data: data
    }
  );

  console.log(`Az elmentett kép id: ${results.insertId}`);

  //visszaolvasás
  [results, fields] = await conn.execute(
    "SELECT data FROM image WHERE id = :id",
    {
      id: results.insertId
    }
  );

  const data1 = results[0].data;

  if (data.compare(data1) === 0) {
    console.log('A visszaolvasott kép tartalom ugyanaz');
  }else{
    console.log('A visszaolvasott kép tartalom NEM ugyanaz');
  }

} catch (err) {
  console.error(err.message);
  console.error(err.stack);
} finally {
  await conn.end();
}
