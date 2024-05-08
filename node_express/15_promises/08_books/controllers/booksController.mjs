import { mainMenu } from "../helpers/menus.mjs";
import { conn } from "../db/mysqlconn.mjs";
import Joi from "joi";

const booksPerPage = 8;

//könyvek számának lekérdezése
async function bookCount() {
  const [row, fields] = await conn.execute(
    "SELECT count(*) AS count FROM books"
  );
  return row[0].count;
}

//könyv adatainak ellenőrzése
//a Joi adatellenőrző modult használjuk
//https://joi.dev/api/?v=17.9.1

//az ISBN számot nem elég regex-el ellenőrizni, mert annak speciális formátuma van, 
//lásd itt: 

//módosítsuk a kódot úgy, hogy alkalmazunk egy ISBN ellenőrző modult, pl.:
//https://www.npmjs.com/package/is-isbn

function checkBook(book) {
  const schema = Joi.object({
    isbn: Joi.string().pattern(/^\d{13}$/).required(),
    title: Joi.string().min(1).max(255).required(),
    author: Joi.string().min(1).max(255).required(),
    pages: Joi.number().integer().min(1).max(5000).required(), 
    pub_name: Joi.string().min(1).max(80).required(),
    pub_date: Joi.date().required(),
    price: Joi.number().min(1).max(5000).required(), 

    })
  const result = schema.validate(book);
  // console.log(result);
  return result;
}

//könyvlista kiírása
export async function list(req, res, next) {
  let from = 0;
  if (req.params.from) {
    from = +req.params.from;
  }

  const reSzam = /^[0-9]+$/;

  if (!reSzam.test(from)) {
    return next(new Error("Hiba történt"));
  }

  const [rows, fields] = await conn.execute(
    "SELECT * FROM books ORDER BY id LIMIT ? , ?",
    ["" + from, "" + booksPerPage]
  );

  const count = await bookCount();
  const browse = {
    first: 0,
    back: from - booksPerPage < 0 ? 0 : from - booksPerPage,
    forward:
      from + booksPerPage >= count ? count - booksPerPage : from + booksPerPage,
    last: count - booksPerPage,
  };

  res.render("list", {
    cim: "Könyv lista",
    lista: rows,
    browse: browse,
    start: from,
    menu: mainMenu,
  });
}

export async function getInsertForm(req, res, next) {
  const book = {
    isbn: "",
    author: "",
    title: "",
    pub_name: "Scientia Kiadó, Kolozsvár",
    pub_date: "",
    price: "",
  };

  res.render("form", {
    doer: "insert",
    cim: "Módosítás",
    book: book,
    error: "",
    menu: mainMenu,
  });
}

export async function postInsertForm(req, res, next) {

  const book = {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    pub_name: req.body.pub_name,
    pub_date: req.body.pub_date,
    price: req.body.price,
  };

  //adat ellenőrzés
  const result = checkBook(book); 

  if (!result.error){
    result.error='';
    try {
      const [results, fields] = await conn.execute(
        "INSERT INTO books (isbn, title, author, pages, pub_name, price )" +
        "VALUES (:isbn, :title, :author, :pages, :pub_name, :price)",
        book
      );

      console.log(`INSERT Beszúrt sor id: ${results.insertId} `);
      console.log(`INSERT Módosult : ${results.affectedRows} sor `);

      res.render('ok', { cim: "MySQL példák", menu: mainMenu });

      }catch(err){
        result.error=err.message;
        console.log(result.error);
        res.render("form", {
        doer: "insert",
        cim: "Módosítás",
        book: book,
        error: result.error,
        menu: mainMenu,
        });
      }
  }else{
    console.log(result.error);
    res.render("form", {
      doer: "insert",
      cim: "Módosítás",
      book: book,
      error: result.error,
      menu: mainMenu,
  });
  }


}

//nincsenek megírva, meg kell írni őket

//megjeleníti egy könyv adatait
export async function view(req, res, next) {
  res.render("book", {
    cim: "Egy könyv adatai",
    menu: mainMenu,
  });
}

//kereső űrlap kiküldése cím, szerző és isbn szám szerint
//GET kérés
export async function find(req, res, next) {
  res.render("find", {
    cim: "Keresés",
    menu: mainMenu,
  });
}

//kereső űrlap fogadása
export async function postFind(req, res, next) {
  res.render("find", {
    cim: "Keresés",
    menu: mainMenu,
  });
}

//egy könyv adatainak módosítása, GET kérés
export async function edit(req, res, next) {
  res.render("edit", {
    cim: "Módosítás",
    menu: mainMenu,
  });

}
//egy könyv adatainak módosítása, POST kérés
export async function postEdit(req, res, next) {

}

//egy könyv adatainak módosítása, GET kérés
export async function remove (req, res, next) {
  res.render("edit", {
    cim: "Módosítás",
    menu: mainMenu,
  });

}
// minta újabb függvénynek:
// export async function example(req, res, next) {
//
//}
