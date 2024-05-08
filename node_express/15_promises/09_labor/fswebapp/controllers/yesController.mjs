import { mainMenu } from "../helpers/menus.mjs";
import {readFile, appendFile, readdir, stat } from "fs/promises";



export async function content(req, res, next) {
  res.send("Content");
}

export async function track(req, res, next) {
  res.send("Track");
}