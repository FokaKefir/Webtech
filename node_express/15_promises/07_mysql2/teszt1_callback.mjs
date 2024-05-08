//callback példa
import mysql from 'mysql2';

const conn = mysql.createConnection({
  host: "localhost",
  user: "books",
  database: "books",
  password: "1234books1234",
});

conn.execute(
  'SELECT * FROM books LIMIT ? , ?',
  ['0', '2'],
  (err, results, fields) => {
    if(err){
      console.log(err.message);
    }else{
      console.log(results); 
      //console.log(fields);
    } 

  }
);
conn.end();