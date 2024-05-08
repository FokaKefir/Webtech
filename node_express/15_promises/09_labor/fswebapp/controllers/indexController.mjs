
import { mainMenu } from '../helpers/menus.mjs';

export const home = async (req, res, next) => {
    try {
      res.render('index', { cim: "Fájlkezelés", menu: mainMenu });
    } catch (err) {
      next(err);
    }
}