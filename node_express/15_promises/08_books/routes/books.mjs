
import express from 'express';
import * as booksController from '../controllers/booksController.mjs';

export const router = express.Router();

router.get(['/', '/list', '/list/:from' ], booksController.list );

router.get('/insert', booksController.getInsertForm);
router.post('/insert', booksController.postInsertForm);

router.get('/find', booksController.find);
router.post('/find', booksController.postFind);

//nincsenek megírva, meg kell írni
//egy könyv adatainak megjelenítése
router.get('/view/:isbn', booksController.view);

//egy könyv adatainak módosítása
router.get('/edit/:isbn', booksController.edit);
router.post('/edit/:isbn', booksController.postEdit);

//könyv törlése
router.get('/delete/:isbn', booksController.remove);