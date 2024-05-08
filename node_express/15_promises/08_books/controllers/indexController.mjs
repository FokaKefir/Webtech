
import { mainMenu } from '../helpers/menus.mjs';

export const home = async (req, res, next) => {
    try {
      res.render('index', { cim: "MySQL példák", menu: mainMenu });
    } catch (err) {
      next(err);
    }
}